import {
  DocsDescription,
  DocsLink,
  DocsParagraph,
  DocsSubtitle,
  DocsTitle,
} from "@/components/docs/docs-typography";
import { WhiteSpan } from "@/components/ui/typography";

export default function DocsPage() {
  return (
    <div>
      <DocsTitle title="Welcome to Auth CN" />
      <DocsDescription>
        A minimalist component library with production-ready authentication
        setups designed for Better Auth and shadcn/ui.
      </DocsDescription>

      <DocsSubtitle title="What is Auth CN?" />
      <DocsParagraph>
        Auth CN is a collection of authentication components and configurations
        specifically designed for{" "}
        <DocsLink href="https://www.better-auth.com/" _blank>
          Better Auth
        </DocsLink>
        . Install them directly into your project using the{" "}
        <WhiteSpan>shadcn registry system</WhiteSpan>.
      </DocsParagraph>
      <DocsParagraph>
        Each component is built with security and accessibility in mind, giving
        you a solid starting point for your authentication needs.
      </DocsParagraph>

      <DocsSubtitle className="mt-6!" title="How It Works" />
      <DocsParagraph>
        Install components with a single command, customize them to fit your
        needs, and deploy. All components are{" "}
        <WhiteSpan>fully customizable</WhiteSpan> since the code lives in your
        project.
      </DocsParagraph>
      <DocsParagraph>
        No abstractions, no hidden logic.{" "}
        <DocsLink href="https://www.better-auth.com/" _blank>
          Better Auth
        </DocsLink>{" "}
        handles the authentication logic while{" "}
        <DocsLink href="https://ui.shadcn.com/" _blank>
          shadcn/ui
        </DocsLink>{" "}
        provides the visual components.
      </DocsParagraph>

      <DocsSubtitle className="mt-6!" title="Open Source" />
      <DocsParagraph>
        Auth CN is open source and free to use. Copy the code, modify it, make
        it yours. <WhiteSpan>You own it completely</WhiteSpan>.
      </DocsParagraph>
      <DocsParagraph>
        UI inspired by the work of{" "}
        <DocsLink href="https://x.com/chronark_" _blank>
          @chronark
        </DocsLink>{" "}
        and{" "}
        <DocsLink href="https://x.com/legionsdev" _blank>
          @legionsdev
        </DocsLink>
        . Thanks for building amazing things in the open.
      </DocsParagraph>
    </div>
  );
}
