import {
  codeBlock,
  codeCommandX,
  desc,
  links,
  subtitle,
  title,
} from "@/types/docs";
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
const code = `import { betterAuth } from "better-auth";
import { WelcomeEmail } from "@/emails/vercel-welcome";
import { sendEmail } from "@/lib/resend";

export const auth = betterAuth({
  // Your auth configuration...
  databaseHooks: {
    user: {
      create: {
        after: async (user) => {
          sendEmail({
            from: "Acme <onboarding@resend.dev>",
            to: user.email,
            subject: "Welcome to Our Service!",
            react: WelcomeEmail({ name: user.name }),
          });
        },
      },
    },
  },
});
`;

export const docs = [
  title(item.title as string),
  desc(item.description as string),
  links(["Resend", "https://resend.com"]),

  subtitle("Installation"),
  desc("Simple Resend configuration."),

  codeCommandX("shadcn@latest add @auth-cn/resend"),

  subtitle("Example"),
  desc("Simple welcome email on user creation."),
  codeBlock("lib/auth.ts", code, "ts"),

  desc("Check the Email section to see multiple uses."),
];
