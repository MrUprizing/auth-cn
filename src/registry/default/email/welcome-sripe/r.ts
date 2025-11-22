import { codeCommandX, desc, links, subtitle, title } from "@/types/docs";
import type { RegistryItem } from "@/types/registry";

export const items: RegistryItem[] = [
  {
    name: "resend-test",
    type: "registry:block",
    title: "Resend",
    description: "Resend integration for Better Auth.",
    files: [
      {
        path: "stripe.tsx",
        type: "registry:lib",
      },
    ],
    dependencies: ["resend", "@react-email/components"],
    devDependencies: ["react-email"],
    envVars: {
      RESEND_API_KEY: "re_xxxxxxxxx",
    },
    docs: "Setup Resend, check https://resend.com/docs.",
  },
  {
    name: "resend-email-template",
    type: "registry:block",
    title: "Resend Email Template",
    description: "Email template component for Resend.",
    files: [
      {
        path: "stripe.tsx",
        type: "registry:component",
      },
    ],
    dependencies: ["@react-email/components"],
  },
];

export const docs = [
  title("Test"),
  desc("Resend integration for Better Auth."),
  links(["Resend", "https://resend.com"]),

  subtitle("Installation"),
  desc("Simple Resend configuration."),

  codeCommandX("shadcn@latest add @auth-cn/resend"),
  desc("Check email section for setup with Better Auth."),
];
