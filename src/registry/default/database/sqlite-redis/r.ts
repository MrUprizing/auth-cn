import type { RegistryItem } from "@/types/registry";

export const item: RegistryItem = {
  name: "sqlite-redis",
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
  dependencies: ["better-auth", "better-sqlite3", "redis"],
  devDependencies: ["@types/better-sqlite3"],
  envVars: {
    BETTER_AUTH_SECRET: "your_super_secret_key",
    BETTER_AUTH_URL: "http://localhost:3000 # Base URL of your app",
    REDIS_URL: "redis://localhost:6379 # Your Redis connection string",
  },
  docs: "Setup Better Auth with SQLite + Redis. More information at https://better-auth.com/docs/adapters/sqlite",
};
