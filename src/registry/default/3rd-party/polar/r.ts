import {
  codeBlock,
  codeCommandX,
  desc,
  links,
  subdesc,
  subtitle,
  title,
} from "@/types/docs";
import type { RegistryItem } from "@/types/registry";

export const item: RegistryItem = {
  name: "polar",
  type: "registry:lib",
  title: "Polar",
  description: "Polar integration for Better Auth.",
  files: [
    {
      path: "polar.ts",
      type: "registry:lib",
      target: "lib/polar.ts",
    },
  ],
  dependencies: ["@polar-sh/better-auth", "@polar-sh/sdk"],
  envVars: {
    POLAR_ACCESS_TOKEN: "polar_xxxxxxxxx",
  },
  docs: "Setup polar, check https://better-auth.com/docs/plugins/polar",
};
const code1 = `import { betterAuth } from "better-auth";
// Import the polar plugin
import { polarPlugin } from "@/lib/polar";

const auth = betterAuth({
  // Better Auth config...
  // Add the polar plugin
  plugins: [polarPlugin],
});
`;
const code2 = `import { createAuthClient } from "better-auth/react";
// Import the polar client
import { polarClient } from "@polar-sh/better-auth";

// This is all that is needed
// All Polar plugins, etc. should be attached to the server-side BetterAuth config
export const authClient = createAuthClient({
  // auth client config...
  plugins: [polarClient()],
});`;

export const docs = [
  title(item.title as string),
  desc(item.description as string),
  links(
    ["Polar", "https://polar.sh"],
    ["Polar plugin", "https://www.better-auth.com/docs/plugins/polar"],
  ),

  subtitle("Installation"),
  desc("Simple Polar configuration."),

  codeCommandX("shadcn@latest add @auth-cn/polar"),
  subdesc("Add Polar sh"),

  codeBlock("lib/auth.ts", code1, "ts"),
  subdesc("import and add the polar plugin to Better Auth."),

  codeBlock("lib/auth-client.ts", code2, "ts"),
  subdesc("Add the polar client to the Better Auth Client."),
];
