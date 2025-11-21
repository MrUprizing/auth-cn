//Docs helpers
import type { BundledLanguage } from "shiki";
import type { ImageZoomProps } from "@/types/image-zoom";

export const title = (text: string) => ({ type: "title" as const, text });

export const subtitle = (text: string, withoutLink?: boolean) => ({
  type: "subtitle" as const,
  text,
  withoutLink,
});

export const desc = (text: string) => ({ type: "description" as const, text });

export const subdesc = (text: string) => ({
  type: "subdescription" as const,
  text,
});

export const p = (text: string) => ({ type: "paragraph" as const, text });

export const codeBlock = (
  name: string,
  code: string,
  language: BundledLanguage,
) => ({
  type: "codeBlock" as const,
  name,
  code,
  language,
});

export const codePreview = (
  name: string,
  component: React.ComponentType,
  code: string,
  language: BundledLanguage,
) => ({
  type: "codePreview" as const,
  name,
  component,
  code,
  language,
});

export const links = (...items: Array<[string, string, boolean?]>) => ({
  type: "links" as const,
  items: items.map(([title, href, blank]) => ({ title, href, _blank: blank })),
});

export const link = (text: string, href: string, blank?: boolean) => ({
  type: "link" as const,
  text,
  href,
  _blank: blank,
});

export const image = (
  src: ImageZoomProps["src"],
  alt: string,
  width?: number | string,
  height?: number | string,
) => ({
  type: "image" as const,
  src,
  alt,
  width,
  height,
});

export const codeCommand = (
  command: string,
  defaultManager?: "pnpm" | "npm" | "yarn" | "bun",
) => ({
  type: "codeCommand" as const,
  command,
  defaultManager,
});

export const codeCommandX = (
  command: string,
  defaultManager?: "pnpmx" | "npmx" | "yarnx" | "bunx",
) => ({
  type: "codeCommandX" as const,
  command,
  defaultManager,
});

type BaseDocsItem =
  | ReturnType<typeof title>
  | ReturnType<typeof subtitle>
  | ReturnType<typeof desc>
  | ReturnType<typeof subdesc>
  | ReturnType<typeof p>
  | ReturnType<typeof codeBlock>
  | ReturnType<typeof codePreview>
  | ReturnType<typeof links>
  | ReturnType<typeof link>
  | ReturnType<typeof image>
  | ReturnType<typeof codeCommand>
  | ReturnType<typeof codeCommandX>;

// Define the tab item type
type TabItem = {
  label: string;
  value: string;
  content: BaseDocsItem[];
};

// Now define tabs with the explicit type
export const tabs = (
  tabItems: TabItem[],
  defaultValue?: string,
): {
  type: "tabs";
  items: TabItem[];
  defaultValue: string;
} => ({
  type: "tabs" as const,
  items: tabItems,
  defaultValue: defaultValue || tabItems[0]?.value || "",
});

export type DocsItem = BaseDocsItem | ReturnType<typeof tabs>;

export type DocsContent = DocsItem[];
