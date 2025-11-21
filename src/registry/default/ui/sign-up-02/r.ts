import type { RegistryItem } from "@/types/registry";

export const item: RegistryItem = {
  name: "sign-up-02",
  type: "registry:block",
  title: "Sign up 02",
  description: "A setup for Better Auth with a simple Tailark sign-up",
  files: [
    {
      path: "sign-up.tsx",
      type: "registry:component",
    },
  ],
  dependencies: ["lucide-react"],
  registryDependencies: ["button", "input", "label", "spinner", "sonner"],
  docs: "You need to have Better Auth set up to use this login component. Visit better-auth.com for more information.",
};
