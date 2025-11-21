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
  name: "mysql",
  type: "registry:block",
  title: "MySQL",
  description: "A setup for Better Auth with MySQL",
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
  dependencies: ["better-auth", "mysql2"],
  envVars: {
    BETTER_AUTH_SECRET: "your_super_secret_key",
    BETTER_AUTH_URL: "http://localhost:3000 # Base URL of your app",
    DATABASE_URL: "mysql://root:password@localhost:3306/database?timezone=Z",
  },
  docs: "Setup Better Auth with MySQL. More information at https://better-auth.com/docs/adapters/mysql",
};

export const docs = [
  title(item.title as string),
  desc(item.description as string),
  links(
    ["Better Auth", "https://better-auth.com"],
    [
      "Better Auth MySQL Docs",
      "https://www.better-auth.com/docs/adapters/mysql",
    ],
  ),
  subtitle("Installation"),
  desc(
    "Install Better Auth with MySQL, or MySQL + Redis as a secondary storage (caching).",
  ),

  codeCommandX("shadcn@latest add @auth-cn/mysql"),
  subdesc("Better Auth + MySQL."),

  codeCommandX("shadcn@latest add @auth-cn/mysql-redis"),
  subdesc("Better Auth + MySQL + Redis as a secondary storage (caching)."),

  subtitle("Schema Generation & Migration."),
  p(
    "The Better Auth CLI allows you to generate and migrate your database schema based on your Better Auth configuration and installed plugins.",
  ),
  p("MySQL supports both schema generation and schema migration."),
  codeCommandX("@better-auth/cli@latest generate"),
  subdesc("Generate MySQL Schema."),
  codeCommandX("@better-auth/cli@latest migrate"),
  subdesc("Migrate MySQL Schema."),
];
