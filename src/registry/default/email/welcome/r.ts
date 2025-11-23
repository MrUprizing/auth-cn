import {
  codeBlock,
  codeCommandX,
  desc,
  image,
  links,
  subdesc,
  subtitle,
  title,
} from "@/types/docs";
import type { RegistryItem } from "@/types/registry";
import type Route from "@/types/route";

export const route: Route = {
  title: "Welcome",
  description: "Pre-built welcome email templates.",
};

const code = `import { betterAuth } from "better-auth";
// Your email template...
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
            // Provide name and email.
            react: WelcomeEmail({ name: user.name, email: user.email }),
          });
        },
      },
    },
  },
});
`;

export const docs = [
  title(route.title as string),
  desc(
    "Add pre-built welcome email templates to send when a user registers, welcoming them.",
  ),
  links(
    ["Resend", "https://resend.com"],
    ["Resend installation", "/docs/3rd-party/resend"],
  ),

  subtitle("Prerequisites"),
  desc(
    "Make sure you have Resend integration installed & add the database hook to your configuration.",
  ),
  codeCommandX("shadcn@latest add @auth-cn/resend"),
  subdesc("Check 3rd-party/resend docs for more information."),
  codeBlock("lib/auth.ts", code, "ts"),
  subdesc("Add the database hook to send welcome email."),

  subtitle("Vercel"),
  desc("Email template integrated with Vercel branding."),
  image("/email/vercel-welcome.png", "test"),
  codeCommandX("shadcn@latest add @auth-cn/email-Vercel-welcome"),
  subdesc("Add template"),

  subtitle("Linear"),
  desc("Email template integrated with Linear branding."),
  image("/email/linear-welcome.png", "test"),
  codeCommandX("shadcn@latest add @auth-cn/email-linear-welcome"),
  subdesc("Add template"),

  subtitle("Raycast"),
  desc("Email template integrated with Raycast branding."),
  image("/email/raycast-welcome.png", "test"),
  codeCommandX("shadcn@latest add @auth-cn/email-raycast-welcome"),
  subdesc("Add template"),

  subtitle("Notion"),
  desc("Email template integrated with Notion branding."),
  image("/email/notion-welcome.png", "test"),
  codeCommandX("shadcn@latest add @auth-cn/email-notion-welcome"),
  subdesc("Add template"),

  subtitle("Slack"),
  desc("Email template integrated with Slack branding."),
  image("/email/slack-welcome.png", "test"),
  codeCommandX("shadcn@latest add @auth-cn/email-slack-welcome"),
  subdesc("Add template"),

  subtitle("Stripe"),
  desc("Email template integrated with Stripe branding."),
  image("/email/stripe-welcome.png", "test"),
  codeCommandX("shadcn@latest add @auth-cn/email-stripe-welcome"),
  subdesc("Add template"),
];

export const items: RegistryItem[] = [
  // Vercel
  {
    name: "email-Vercel-welcome",
    type: "registry:item",
    title: "Welcome Email with Vercel",
    description: "Welcome email template integrated with Vercel branding.",
    files: [
      {
        path: "vercel.tsx",
        type: "registry:item",
        target: "emails/vercel-welcome.tsx",
      },
    ],
    dependencies: ["resend", "@react-email/components"],
    devDependencies: ["react-email"],
    docs: "Check https://auth.uprizing.me/docs/email/welcome",
  },
  // Linear
  {
    name: "email-linear-welcome",
    type: "registry:item",
    title: "Welcome Email with Linear",
    description: "Welcome email template integrated with Linear branding.",
    files: [
      {
        path: "linear.tsx",
        type: "registry:item",
        target: "emails/linear-welcome.tsx",
      },
    ],
    dependencies: ["resend", "@react-email/components"],
    devDependencies: ["react-email"],
    docs: "Check https://auth.uprizing.me/docs/email/welcome",
  },
  // Raycast
  {
    name: "email-raycast-welcome",
    type: "registry:item",
    title: "Welcome Email with Raycast",
    description: "Welcome email template integrated with Raycast branding.",
    files: [
      {
        path: "raycast.tsx",
        type: "registry:item",
        target: "emails/raycast-welcome.tsx",
      },
    ],
    dependencies: ["resend", "@react-email/components"],
    devDependencies: ["react-email"],
    docs: "Check https://auth.uprizing.me/docs/email/welcome",
  },
  // Notion
  {
    name: "email-notion-welcome",
    type: "registry:item",
    title: "Welcome Email with Notion",
    description: "Welcome email template integrated with Notion branding.",
    files: [
      {
        path: "notion.tsx",
        type: "registry:item",
        target: "emails/notion-welcome.tsx",
      },
    ],
    dependencies: ["resend", "@react-email/components"],
    devDependencies: ["react-email"],
    docs: "Check https://auth.uprizing.me/docs/email/welcome",
  },
  // Slack
  {
    name: "email-slack-welcome",
    type: "registry:item",
    title: "Welcome Email with Slack",
    description: "Welcome email template integrated with Slack branding.",
    files: [
      {
        path: "slack.tsx",
        type: "registry:item",
        target: "emails/slack-welcome.tsx",
      },
    ],
    dependencies: ["resend", "@react-email/components"],
    devDependencies: ["react-email"],
    docs: "Check https://auth.uprizing.me/docs/email/welcome",
  },
  // Stripe
  {
    name: "email-stripe-welcome",
    type: "registry:item",
    title: "Welcome Email with Stripe",
    description: "Welcome email template integrated with Stripe branding.",
    files: [
      {
        path: "stripe.tsx",
        type: "registry:item",
        target: "emails/stripe-welcome.tsx",
      },
    ],
    dependencies: ["resend", "@react-email/components"],
    devDependencies: ["react-email"],
    docs: "Check https://auth.uprizing.me/docs/email/welcome",
  },
];
