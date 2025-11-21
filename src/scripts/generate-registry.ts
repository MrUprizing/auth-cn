#!/usr/bin/env node
import { existsSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import type { RegistryItem } from "../types/registry";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const REGISTRY_PATH = join(__dirname, "..", "registry");
const OUTPUT_PATH = join(__dirname, "../..", "registry.json");

function processRegistryItem(
  item: RegistryItem,
  style: string,
  category: string,
  componentDir: string,
): RegistryItem {
  const processedFiles = item.files?.map((file) => {
    let fullPath = file.path;

    if (!file.path.startsWith("src/")) {
      fullPath = `src/registry/${style}/${category}/${componentDir}/${file.path}`;
    }

    return {
      ...file,
      path: fullPath,
    };
  });

  const processedItem: RegistryItem = {
    name: item.name,
    type: item.type,
    ...(item.title && { title: item.title }),
    ...(item.description && { description: item.description }),
    ...(item.author && { author: item.author }),
    ...(item.dependencies && { dependencies: item.dependencies }),
    ...(item.devDependencies && { devDependencies: item.devDependencies }),
    ...(item.registryDependencies && {
      registryDependencies: item.registryDependencies,
    }),
    ...(processedFiles && { files: processedFiles }),
    ...(item.tailwind && { tailwind: item.tailwind }),
    ...(item.cssVars && { cssVars: item.cssVars }),
    ...(item.css && { css: item.css }),
    ...(item.envVars && { envVars: item.envVars }),
    ...(item.meta && { meta: item.meta }),
    ...(item.docs && { docs: item.docs }),
    ...(item.categories && { categories: item.categories }),
    ...(item.extends && { extends: item.extends }),
  };

  return processedItem;
}

function checkForDuplicates(
  itemName: string,
  fullPath: string,
  nameMap: Map<string, string>,
  duplicateNames: Array<{ name: string; paths: string[] }>,
): void {
  if (nameMap.has(itemName)) {
    // biome-ignore lint/style/noNonNullAssertion: <Vibe code :)>
    const existingPath = nameMap.get(itemName)!;
    const duplicate = duplicateNames.find((d) => d.name === itemName);

    if (duplicate) {
      duplicate.paths.push(fullPath);
    } else {
      duplicateNames.push({
        name: itemName,
        paths: [existingPath, fullPath],
      });
    }
  } else {
    nameMap.set(itemName, fullPath);
  }
}

async function processComponentInCategory(
  style: string,
  category: string,
  componentDir: string,
  nameMap: Map<string, string>,
  duplicateNames: Array<{ name: string; paths: string[] }>,
  items: RegistryItem[],
): Promise<boolean> {
  const rFilePath = join(REGISTRY_PATH, style, category, componentDir, "r.ts");

  if (!existsSync(rFilePath)) {
    return false;
  }

  try {
    const fileUrl = `file://${rFilePath}`;
    const module = await import(fileUrl);

    if (module.item) {
      const itemName = module.item.name;
      const fullPath = `${style}/${category}/${componentDir}`;

      if (!itemName) {
        console.error(`    ❌ Missing 'name' in ${rFilePath}`);
        return false;
      }

      checkForDuplicates(itemName, fullPath, nameMap, duplicateNames);

      const processedItem = processRegistryItem(
        module.item,
        style,
        category,
        componentDir,
      );
      items.push(processedItem);
      console.log(`    ✅ Loaded: ${processedItem.name}`);
      return true;
    }
  } catch (error) {
    console.error(`    ❌ Error loading ${rFilePath}:`, error);
  }

  return false;
}

async function processDirectComponent(
  style: string,
  category: string,
  nameMap: Map<string, string>,
  duplicateNames: Array<{ name: string; paths: string[] }>,
  items: RegistryItem[],
): Promise<boolean> {
  const directRFile = join(REGISTRY_PATH, style, category, "r.ts");

  if (!existsSync(directRFile)) {
    return false;
  }

  try {
    const fileUrl = `file://${directRFile}`;
    const module = await import(fileUrl);

    if (module.item) {
      const itemName = module.item.name;
      const fullPath = `${style}/${category}`;

      if (!itemName) {
        console.error(`    ❌ Missing 'name' in ${directRFile}`);
        return false;
      }

      checkForDuplicates(itemName, fullPath, nameMap, duplicateNames);

      const processedItem = processRegistryItem(
        module.item,
        style,
        category,
        "",
      );
      items.push(processedItem);
      console.log(`    ✅ Loaded: ${processedItem.name}`);
      return true;
    }
  } catch (error) {
    console.error(`    ❌ Error loading ${directRFile}:`, error);
  }

  return false;
}

async function generateRegistry() {
  console.log("🔍 Scanning registry folders...");

  const items: RegistryItem[] = [];
  const nameMap = new Map<string, string>();
  const duplicateNames: Array<{ name: string; paths: string[] }> = [];

  const styleDirectories = readdirSync(REGISTRY_PATH, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

  console.log(
    `📁 Found ${styleDirectories.length} style(s): ${styleDirectories.join(", ")}`,
  );

  for (const style of styleDirectories) {
    const stylePath = join(REGISTRY_PATH, style);

    const entries = readdirSync(stylePath, { withFileTypes: true }).filter(
      (dirent) => dirent.isDirectory(),
    );

    let totalComponents = 0;

    for (const entry of entries) {
      const category = entry.name;

      const isDirectComponent = await processDirectComponent(
        style,
        category,
        nameMap,
        duplicateNames,
        items,
      );

      if (isDirectComponent) {
        totalComponents++;
      } else {
        const categoryPath = join(stylePath, category);
        const componentDirs = readdirSync(categoryPath, {
          withFileTypes: true,
        }).filter((dirent) => dirent.isDirectory());

        for (const componentDir of componentDirs) {
          const loaded = await processComponentInCategory(
            style,
            category,
            componentDir.name,
            nameMap,
            duplicateNames,
            items,
          );

          if (loaded) {
            totalComponents++;
          }
        }
      }
    }

    console.log(`  📦 Found ${totalComponents} component(s) in "${style}"`);
  }

  if (duplicateNames.length > 0) {
    console.error("\n⚠️  DUPLICATE NAMES DETECTED:");
    duplicateNames.forEach((dup) => {
      console.error(`\n  ❌ Name: "${dup.name}"`);
      dup.paths.forEach((path) => {
        console.error(`     📁 ${path}`);
      });
      console.error(`     → Change the 'name' in r.ts to make it unique`);
    });
    process.exit(1);
  }

  const registry = {
    $schema: "https://ui.shadcn.com/schema/registry.json",
    name: "uprizing UI",
    homepage: "https://ui.uprizing.dev",
    items,
  };

  await Bun.write(OUTPUT_PATH, JSON.stringify(registry, null, 2));

  console.log(`\n✨ Registry generated successfully!`);
  console.log(`📄 Total items: ${items.length}`);
  console.log(`💾 Saved to: ${OUTPUT_PATH}`);
}

generateRegistry().catch((error) => {
  console.error("❌ Error generating registry:", error);
  process.exit(1);
});
