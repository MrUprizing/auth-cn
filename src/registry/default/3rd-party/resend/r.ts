import { codeCommandX, desc, links, subtitle, title } from "@/types/docs";
import type { RegistryItem } from "@/types/registry";

export const item: RegistryItem = {
  name: "resend",
  type: "registry:block",
  title: "Resend",
  description: "Resend integration for Better Auth.",
  files: [
    {
      path: "resend.ts",
      type: "registry:lib",
    },
  ],
  dependencies: ["resend", "@react-email/components"],
  devDependencies: ["react-email"],
  envVars: {
    RESEND_API_KEY: "re_xxxxxxxxx",
  },
  docs: "Setup Resend, check https://resend.com/docs.",
};

export const docs = [
  title(item.title as string),
  desc(item.description as string),
  links(["Resend", "https://resend.com"]),

  subtitle("Installation"),
  desc("Simple Resend configuration."),

  codeCommandX("shadcn@latest add @auth-cn/resend"),
  desc("Check email section for setup with Better Auth."),
];
