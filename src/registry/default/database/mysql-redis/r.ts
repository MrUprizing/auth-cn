import type { RegistryItem } from "@/types/registry";

export const item: RegistryItem = {
  name: "mysql-redis",
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
  dependencies: ["better-auth", "mysql2", "redis"],
  envVars: {
    BETTER_AUTH_SECRET: "your_super_secret_key",
    BETTER_AUTH_URL: "http://localhost:3000 # Base URL of your app",
    DATABASE_URL: "mysql://root:password@localhost:3306/database?timezone=Z",
  },
  docs: "Setup Better Auth with MySQL. More information at https://better-auth.com/docs/adapters/mysql",
};
