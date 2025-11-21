import type { RegistryItem } from "@/types/registry";

export const item: RegistryItem = {
  name: "sign-in-01",
  type: "registry:block",
  title: "Sign in 01",
  description: "A setup for Better Auth with a simple Tailark sign-in",
  files: [
    {
      path: "sign-in.tsx",
      type: "registry:component",
    },
  ],
  dependencies: ["lucide-react"],
  registryDependencies: ["button", "input", "label", "spinner", "sonner"],
  docs: "You need to have Better Auth set up to use this login component. Visit https://auth.uprizing.me/docs for install.",
};
