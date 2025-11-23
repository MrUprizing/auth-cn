import {
  codeBlock,
  codeCommandX,
  codePreview,
  desc,
  image,
  links,
  subdesc,
  subtitle,
  title,
} from "@/types/docs";
import type { RegistryItem } from "@/types/registry";
import type Route from "@/types/route";
import { getComponentCode } from "@/lib/get-component-code";
import Avatar01Component from "./avatar-01-component";
import Avatar02Component from "./avatar-02-component";
import Avatar03Component from "./avatar-03-component";
import Avatar04Component from "./avatar-04-component";
import Avatar05Component from "./avatar-05-component";

export const route: Route = {
  title: "Avatar",
  description:
    "Avatar components integrated with vercel avatar microservice (Free). It automatically generates the image, based on the Better Auth session user data.",
};

export const docs = async () => {
  const avatar01c = await getComponentCode("ui/avatar/avatar-01");
  const avatar02c = await getComponentCode("ui/avatar/avatar-02");
  const avatar03c = await getComponentCode("ui/avatar/avatar-03");
  const avatar04c = await getComponentCode("ui/avatar/avatar-04");
  const avatar05c = await getComponentCode("ui/avatar/avatar-05");

  return [
    title(route.title as string),
    desc(route.description as string),
    links(["Vercel Avatar Docs", "https://github.com/vercel/avatar"]),

    subtitle("Simple avatar"),
    desc("Simple avatar component"),
    codePreview("avatar-01", Avatar01Component, avatar01c, "tsx"),

    subtitle("Simple rounded avatar"),
    desc("Simple rounded avatar component "),
    codePreview("avatar-02", Avatar02Component, avatar02c, "tsx"),

    subtitle("Simple dropdown avatar"),
    desc("Simple dropdown avatar component "),
    codePreview("avatar-03", Avatar03Component, avatar03c, "tsx"),

    subtitle("Simple icon + dropdown avatar"),
    desc("Simple icon + dropdown avatar component "),
    codePreview("avatar-04", Avatar04Component, avatar04c, "tsx"),

    subtitle("Simple dynamic avatar"),
    desc(
      "Avatar component that displays different UI based on authentication state",
    ),
    codePreview("avatar-05", Avatar05Component, avatar05c, "tsx"),
  ];
};
export const items: RegistryItem[] = [
  // Avatar 01
  {
    name: "avatar-01",
    type: "registry:component",
    title: "Simple avatar",
    description: "Simple avatar component",
    files: [
      {
        path: "avatar-01.tsx",
        type: "registry:ui",
        target: "components/ui/user-avatar.tsx",
      },
    ],
    registryDependencies: ["avatar"],
    docs: "Simple avatar component.",
  },
  // Avatar 02
  {
    name: "avatar-02",
    type: "registry:component",
    title: "Simple rounded avatar",
    description: "Simple rounded avatar component",
    files: [
      {
        path: "avatar-02.tsx",
        type: "registry:ui",
        target: "components/ui/user-avatar.tsx",
      },
    ],
    registryDependencies: ["avatar"],
    docs: "Simple avatar component.",
  },
  // Avatar 03
  {
    name: "avatar-03",
    type: "registry:component",
    title: "Simple dropdown avatar",
    description: "Simple dropdown avatar component",
    files: [
      {
        path: "avatar-03.tsx",
        type: "registry:ui",
        target: "components/ui/user-avatar.tsx",
      },
    ],
    registryDependencies: ["avatar", "dropdown-menu"],
    docs: "Simple dropdown avatar component",
  },
  // Avatar 04
  {
    name: "avatar-04",
    type: "registry:component",
    title: "Simple icon + dropdown avatar",
    description: "Simple icon + dropdown avatar component",
    files: [
      {
        path: "avatar-04.tsx",
        type: "registry:ui",
        target: "components/ui/user-avatar.tsx",
      },
    ],
    registryDependencies: ["avatar", "dropdown-menu"],
    dependencies: ["lucide-react"],
    docs: "Simple icon + dropdown avatar component",
  },
  // Avatar 05
  {
    name: "avatar-05",
    type: "registry:component",
    title: "Simple dynamic avatar",
    description:
      "Avatar component that displays different UI based on authentication state",
    files: [
      {
        path: "avatar-05.tsx",
        type: "registry:ui",
        target: "components/ui/user-avatar.tsx",
      },
    ],
    registryDependencies: ["avatar", "button"],
    docs: "Avatar component that displays different UI based on authentication state",
  },
];
