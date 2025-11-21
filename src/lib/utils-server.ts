import fs from "node:fs";
import path from "node:path";

// For VIEW: find folder by item.name (only items with 'item' export)
async function findFolderByItemName(
  category: string,
  itemName: string,
): Promise<string | null> {
  const categoryPath = path.join(
    process.cwd(),
    "src/registry/default",
    category,
  );
  const folders = fs.readdirSync(categoryPath);

  for (const folder of folders) {
    const rFilePath = path.join(categoryPath, folder, "r.ts");
    if (fs.existsSync(rFilePath)) {
      try {
        const module = await import(
          `@/registry/default/${category}/${folder}/r.ts`
        );

        // Only check if module has 'item' export
        if (module.item && module.item.name === itemName) {
          return folder;
        }
      } catch (error) {
        console.error(`Error loading ${category}/${folder}/r.ts:`, error);
      }
    }
  }

  return null;
}

// For DOCS: find folder by folder name (can have 'item' or 'route')
async function findFolderByName(
  category: string,
  folderName: string,
): Promise<string | null> {
  const categoryPath = path.join(
    process.cwd(),
    "src/registry/default",
    category,
  );
  const folders = fs.readdirSync(categoryPath);

  for (const folder of folders) {
    const rFilePath = path.join(categoryPath, folder, "r.ts");
    if (fs.existsSync(rFilePath) && folder === folderName) {
      return folder;
    }
  }

  return null;
}

export async function getRegistryItem(category: string, name: string) {
  // Try to find by item.name first (for view pages)
  let folder = await findFolderByItemName(category, name);

  // If not found, try by folder name (for docs pages)
  if (!folder) {
    folder = await findFolderByName(category, name);
  }

  if (!folder) return null;

  const registryPath = path.join(
    process.cwd(),
    "src/registry/default",
    category,
    folder,
    "r.ts",
  );

  if (!fs.existsSync(registryPath)) {
    return null;
  }

  const module = await import(`@/registry/default/${category}/${folder}/r.ts`);

  // Try to get item first, fallback to route if item doesn't exist
  return module.item || module.route || null;
}

export async function getRegistryDocs(category: string, name: string) {
  try {
    // Docs always uses folder name
    const folder = await findFolderByName(category, name);
    if (!folder) return null;

    const registryPath = path.join(
      process.cwd(),
      "src/registry/default",
      category,
      folder,
      "r.ts",
    );

    if (!fs.existsSync(registryPath)) {
      return null;
    }

    const module = await import(
      `@/registry/default/${category}/${folder}/r.ts`
    );

    const docsData = module.docs;

    if (typeof docsData === "function") {
      return await docsData();
    }

    return docsData;
  } catch (error) {
    console.error(`Error loading docs for ${category}/${name}:`, error);
    return null;
  }
}

export async function getComponent(category: string, name: string) {
  try {
    // Components (view) only uses item.name
    const folder = await findFolderByItemName(category, name);
    if (!folder) return null;

    const Component = (
      await import(`@/registry/default/${category}/${folder}/component.tsx`)
    ).default;
    return Component;
  } catch {
    return null;
  }
}

export async function generateStaticParamsServer() {
  const registryPath = path.join(process.cwd(), "src/registry/default");
  const categories = fs.readdirSync(registryPath);

  const params = [];
  for (const category of categories) {
    const categoryPath = path.join(registryPath, category);
    if (fs.statSync(categoryPath).isDirectory()) {
      const folders = fs.readdirSync(categoryPath);
      for (const folder of folders) {
        const rFilePath = path.join(categoryPath, folder, "r.ts");
        if (fs.existsSync(rFilePath)) {
          try {
            const module = await import(
              `@/registry/default/${category}/${folder}/r.ts`
            );

            // Only add params for items that have 'item' export (for view)
            if (module.item?.name) {
              params.push({ category, name: module.item.name });
            }
          } catch (error) {
            console.error(`Error loading ${category}/${folder}/r.ts:`, error);
          }
        }
      }
    }
  }

  return params;
}

export async function getSidebarItems(): Promise<
  Record<string, Array<{ name: string; title: string; url: string }>>
> {
  const registryPath = path.join(process.cwd(), "src/registry/default");
  const categories = fs.readdirSync(registryPath);

  const items: Record<
    string,
    Array<{ name: string; title: string; url: string }>
  > = {};

  for (const category of categories) {
    const categoryPath = path.join(registryPath, category);
    if (fs.statSync(categoryPath).isDirectory()) {
      const folders = fs.readdirSync(categoryPath);
      items[category] = [];

      for (const folder of folders) {
        const rFilePath = path.join(categoryPath, folder, "r.ts");
        if (fs.existsSync(rFilePath)) {
          try {
            const module = await import(
              `@/registry/default/${category}/${folder}/r.ts`
            );

            // Try to get item first, fallback to route
            const data = module.item || module.route;

            if (!data) {
              continue;
            }

            // Validate that docs exist
            if (!module.docs) {
              continue;
            }

            items[category].push({
              name: folder,
              title: data.title || folder,
              url: `/docs/${category}/${folder}`,
            });
          } catch (error) {
            console.error(`Error loading ${category}/${folder}:`, error);
          }
        }
      }

      // Sort items alphabetically by title
      items[category].sort((a, b) => a.title.localeCompare(b.title));
    }
  }

  return items;
}
