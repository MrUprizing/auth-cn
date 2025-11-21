export interface Registry {
  name: string;
  homepage: string;
  items: RegistryItem[];
}

export interface RegistryItem {
  name: string;
  type:
    | "registry:lib"
    | "registry:block"
    | "registry:component"
    | "registry:ui"
    | "registry:hook"
    | "registry:theme"
    | "registry:page"
    | "registry:file"
    | "registry:style"
    | "registry:item";
  description?: string;
  title?: string;
  author?: string;
  dependencies?: string[];
  devDependencies?: string[];
  registryDependencies?: string[];
  files?: RegistryFile[];
  tailwind?: {
    config?: {
      content?: string[];
      theme?: Record<string, unknown>;
      plugins?: string[];
    };
  };
  cssVars?: {
    theme?: Record<string, string>;
    light?: Record<string, string>;
    dark?: Record<string, string>;
  };
  css?: Record<string, CssValue>;
  envVars?: Record<string, string>;
  meta?: Record<string, unknown>;
  docs?: string;
  categories?: string[];
  extends?: string;
}

export interface RegistryFile {
  path: string;
  type:
    | "registry:lib"
    | "registry:block"
    | "registry:component"
    | "registry:ui"
    | "registry:hook"
    | "registry:theme"
    | "registry:page"
    | "registry:file"
    | "registry:style"
    | "registry:item";
  content?: string;
  target?: string;
}

export type CssValue = string | { [key: string]: CssValue };
