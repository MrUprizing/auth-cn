import {
  codeCommandX,
  desc,
  links,
  p,
  subdesc,
  subtitle,
  title,
} from "@/types/docs";
import type { RegistryItem } from "@/types/registry";

export const item: RegistryItem = {
  name: "sqlite",
  type: "registry:block",
  title: "SQLite",
  description: "A setup for Better Auth with SQLite",
  files: [
    {
      path: "auth.ts",
      type: "registry:lib",
    },
    {
      path: "auth-client.ts",
      type: "registry:lib",
    },
    {
      path: "route.ts",
      type: "registry:page",
      target: "app/api/auth/[...all]/route.ts",
    },
  ],
  dependencies: ["better-auth", "better-sqlite3"],
  devDependencies: ["@types/better-sqlite3"],
  envVars: {
    BETTER_AUTH_SECRET: "your_super_secret_key",
    BETTER_AUTH_URL: "http://localhost:3000 # Base URL of your app",
  },
  docs: "Setup Better Auth with SQLite. More information at https://better-auth.com/docs/adapters/sqlite",
};

export const docs = [
  title(item.title as string),
  desc(item.description as string),
  links(
    ["Better Auth", "https://better-auth.com"],
    [
      "Better Auth SQLite Docs",
      "https://www.better-auth.com/docs/adapters/sqlite",
    ],
  ),

  subtitle("Installation"),
  desc(
    "Install Better Auth with SQLite, or SQLite + Redis as a secondary storage (caching).",
  ),

  codeCommandX("shadcn@latest add @auth-cn/sqlite"),
  subdesc("Better Auth + SQLite."),

  codeCommandX("shadcn@latest add @auth-cn/sqlite-redis"),
  subdesc("Better Auth + SQLite + Redis as a secondary storage (caching)."),

  subtitle("Schema generation & migration."),
  p(
    "The Better Auth CLI allows you to generate and migrate your database schema based on your Better Auth configuration and installed plugins.",
  ),
  p("SQLite supports both schema generation and schema migration."),
  codeCommandX("@better-auth/cli@latest generate"),
  subdesc("Generate SQLite Schema."),
  codeCommandX("@better-auth/cli@latest migrate"),
  subdesc("Migrate SQLite Schema."),
];
