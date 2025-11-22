import {
  codeCommandX,
  desc,
  image,
  links,
  subtitle,
  title,
  p,
  codePreview,
} from "@/types/docs";
import type { RegistryItem } from "@/types/registry";
import type Route from "@/types/route";

export const route: Route = {
  title: "Welcome",
  description: "Pre-built welcome email templates.",
};

export const docs = [
  title(route.title as string),
  desc(route.description as string),
  links(["Resend", "https://resend.com"]),

  subtitle("Vercel"),
  p("Email template integrated with Vercel branding."),
  image("/email/email-vercel.png", "test", 400),
  codeCommandX("shadcn@latest add @auth-cn/email-Vercel-welcome"),

  subtitle("Linear"),
  p("Email template integrated with Linear branding."),
  image("/og.png", "test"),
  codeCommandX("shadcn@latest add @auth-cn/email-linear-welcome"),

  subtitle("Raycast"),
  p("Email template integrated with Raycast branding."),
  image("/og.png", "test"),
  desc("Preview email."),
  codeCommandX("shadcn@latest add @auth-cn/email-raycast-welcome"),

  subtitle("Notion"),
  p("Email template integrated with Notion branding."),
  image("/og.png", "test"),
  desc("Preview email."),
  codeCommandX("shadcn@latest add @auth-cn/email-notion-welcome"),

  subtitle("Stripe"),
  p("Email template integrated with Stripe branding."),
  image("/og.png", "test"),
  desc("Preview email."),
  codeCommandX("shadcn@latest add @auth-cn/email-stripe-welcome"),
];

export const items: RegistryItem[] = [
  {
    name: "email-01",
    type: "registry:block",
    title: "Welcome Email with Stripe",
    description: "Welcome email template integrated with Stripe branding.",
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
    docs: "Check https://auth.uprizing.me/docs/email/welcome",
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
