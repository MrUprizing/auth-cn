import { getComponentCode } from "@/lib/get-component-code";
import { codePreview, desc, links, subtitle, title } from "@/types/docs";
import type { RegistryItem } from "@/types/registry";
import type Route from "@/types/route";
import PolarButton from "./button-polar-portal-component";

export const route: Route = {
  title: "Polar",
  description: "Components UI for Polar.",
};

export const docs = async () => {
  const button01 = await getComponentCode("ui/polar/button-polar-portal");
  return [
    title(route.title as string),
    desc("Add components UI for Polar integration."),
    links(
      ["Polar", "https://polar.sh"],
      ["Polar installation", "/docs/3rd-party/polar"],
    ),

    subtitle("Polar button for Customer Portal"),
    desc(
      "When the button is pressed, the user will be redirected to the Polar Customer Portal.",
    ),
    codePreview("button-polar-portal", PolarButton, button01, "tsx"),
  ];
};

export const items: RegistryItem[] = [
  // Buton
  {
    name: "button-polar-portal",
    type: "registry:component",
    title: "Polar button for Customer Portal",
    description: "Simple Button component to access Polar Customer Portal.",
    files: [
      {
        path: "button-polar-portal.tsx",
        type: "registry:ui",
        target: "components/ui/button-polar-portal.tsx",
      },
      {
        path: "logo-polar.tsx",
        type: "registry:item",
        target: "assets/logo-polar.tsx",
      },
    ],
    dependencies: ["@polar-sh/better-auth", "@polar-sh/sdk"],
    docs: "Check out https://www.better-auth.com/docs/plugins/polar",
  },
];
