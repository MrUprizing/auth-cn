import { getComponentCode } from "@/lib/get-component-code";
import { codePreview, desc, links, subtitle, title } from "@/types/docs";
import type Route from "@/types/route";
import SignUp01 from "../sign-up-01/component";
import SignUp02 from "../sign-up-02/component";

// This will only be used by the page, not by the registry script
export const route: Route = {
  title: "Sign Up",
  description: "Components UI for sign-up.",
};

export const docs = async () => {
  const signUp01 = await getComponentCode("ui/sign-up-01/sign-up");
  const signUp02 = await getComponentCode("ui/sign-up-02/sign-up");

  return [
    title("Sign up components"),
    desc(route.description),

    subtitle("Sign Up 01"),
    desc("A setup for Better Auth with a simple Tailark sign-up"),
    links(["Tailark", "https://tailark.com/sign-up"]),
    codePreview("sign-up-01", SignUp01, signUp01, "tsx"),

    subtitle("Sign Up 02"),
    desc("A setup for Better Auth with a simple Tailark sign-up"),
    links(["Tailark", "https://tailark.com/sign-up"]),
    codePreview("sign-up-02", SignUp02, signUp02, "tsx"),
  ];
};
