import type { RegistryItem } from "@/types/registry";

export const item: RegistryItem = {
  name: "postgres-redis",
  type: "registry:block",
  title: "PostgreSQL + Redis",
  description: "Setup Better Auth with PostgreSQL + Redis.",
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
  dependencies: ["better-auth", "pg", "redis"],
  devDependencies: ["@types/pg"],
  envVars: {
    BETTER_AUTH_SECRET: "your_super_secret_key",
    BETTER_AUTH_URL: "http://localhost:3000 # Base URL of your app",
    DATABASE_URL: "postgresql://user:password@localhost:5432/database",
    REDIS_URL: "redis://localhost:6379 # Your Redis connection string",
  },
  docs: "Setup Better Auth with Postgres + Redis. More information at https://better-auth.com/docs/adapters/postgresql",
};
