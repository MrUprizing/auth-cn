import { getComponentCode } from "@/lib/get-component-code";
import { codePreview, desc, links, subtitle, title } from "@/types/docs";
import type Route from "@/types/route";
import SignIn01 from "../sign-in-01/component";
import SignIn02 from "../sign-in-02/component";

export const route: Route = {
  title: "Login",
  description: "Components UI for Login.",
};

export const docs = async () => {
  const signIn01 = await getComponentCode("ui/sign-in-01/sign-in");
  const signIn02 = await getComponentCode("ui/sign-in-01/sign-in");

  return [
    title("Login components"),
    desc(route.description),

    subtitle("Login 01"),
    desc("A setup for Better Auth with a simple Tailark sign-in"),
    links(["Tailark", "https://tailark.com/login"]),
    codePreview("sign-in-01", SignIn01, signIn01, "tsx"),

    subtitle("Login 02"),
    desc("A setup for Better Auth with a simple Tailark sign-in"),
    links(["Tailark", "https://tailark.com/login"]),
    codePreview("sign-in-02", SignIn02, signIn02, "tsx"),
  ];
};
