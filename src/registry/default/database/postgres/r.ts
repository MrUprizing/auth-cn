import {
  codeCommandX,
  desc,
  links,
  p,
  subdesc,
  subtitle,
  tabs,
  title,
} from "@/types/docs";
import type { RegistryItem } from "@/types/registry";

export const item: RegistryItem = {
  name: "postgres",
  type: "registry:block",
  title: "PostgreSQL",
  description: "Setup Better Auth with PostgreSQL.",
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
  dependencies: ["better-auth", "pg"],
  devDependencies: ["@types/pg"],
  envVars: {
    BETTER_AUTH_SECRET: "your_super_secret_key",
    BETTER_AUTH_URL: "http://localhost:3000 # Base URL of your app",
    DATABASE_URL: "postgresql://user:password@localhost:5432/database",
  },
  docs: "Setup Better Auth with Postgres. More information at https://better-auth.com/docs/adapters/postgresql",
};

export const docs = [
  title(item.title as string),
  desc(item.description as string),
  links(
    ["Better Auth", "https://www.better-auth.com"],
    [
      "Better Auth PostgreSQL Docs",
      "https://www.better-auth.com/docs/adapters/postgresql",
    ],
  ),

  subtitle("Installation"),
  desc(
    "Install Better Auth with PostgreSQL, or PostgreSQL + Redis as a secondary storage (caching).",
  ),
  tabs([
    {
      label: "NextJS",
      value: "nextjs",
      content: [
        codeCommandX("shadcn@latest add @auth-cn/postgres"),
        subdesc("Better Auth + PostgreSQL"),

        codeCommandX("shadcn@latest add @auth-cn/postgres-redis"),
        subdesc(
          "Better Auth + PostgreSQL + Redis as a secondary storage (caching)",
        ),
      ],
    },
    {
      label: "Hono",
      value: "hono",
      content: [
        codeCommandX("shadcn@latest add @auth-cn/postgres-hono"),
        subdesc("Better Auth + PostgreSQL"),

        codeCommandX("shadcn@latest add @auth-cn/postgres-redis-hono"),
        subdesc(
          "Better Auth + PostgreSQL + Redis as a secondary storage (caching)",
        ),
      ],
    },
    {
      label: "ElysiaJS",
      value: "elysiajs",
      content: [
        codeCommandX("shadcn@latest add @auth-cn/postgres-elysia"),
        subdesc("Better Auth + PostgreSQL"),

        codeCommandX("shadcn@latest add @auth-cn/postgres-redis-elysia"),
        subdesc(
          "Better Auth + PostgreSQL + Redis as a secondary storage (caching)",
        ),
      ],
    },
  ]),

  subtitle("Schema Generation & Migration"),
  p(
    "The Better Auth CLI allows you to generate and migrate your database schema based on your Better Auth configuration and installed plugins.",
  ),
  p("PostgreSQL supports both schema generation and schema migration"),
  codeCommandX("@better-auth/cli@latest generate"),
  subdesc("Generate PostgreSQL Schema"),
  codeCommandX("@better-auth/cli@latest migrate"),
  subdesc("Migrate PostgreSQL Schema"),
];
