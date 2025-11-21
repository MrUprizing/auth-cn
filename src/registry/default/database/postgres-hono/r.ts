import type { RegistryItem } from "@/types/registry";

export const item: RegistryItem = {
  name: "postgres-hono",
  type: "registry:block",
  title: "PostgreSQL",
  description: "Setup Better Auth with PostgreSQL.",
  files: [
    {
      path: "auth.ts",
      type: "registry:lib",
    },
    {
      path: "route.ts",
      type: "registry:file",
      target: "routes/auth.ts",
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
