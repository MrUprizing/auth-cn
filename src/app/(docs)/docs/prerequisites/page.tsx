import {
  DocsCodeBlock,
  DocsCodeCommand,
  DocsCodeCommandX,
  DocsDescription,
  DocsLink,
  DocsParagraph,
  DocsSubtitle,
  DocsTabs,
  DocsTitle,
} from "@/components/docs/docs-typography";

import { Step, StepContent, Steps } from "@/components/ui/steps";
import { TabsContent } from "@/components/ui/tabs";

export default function Page() {
  return (
    <div>
      <DocsTitle title="Prerequisites" />
      <DocsDescription>
        Learn how to install and configure Better Auth and Shadcn UI in your
        project.
      </DocsDescription>
      {/*<Separator className="my-6" />*/}
      <DocsTabs
        items={[
          { label: "Next.js", value: "nextjs" },
          { label: "Hono", value: "hono" },
          { label: "ElysiaJS", value: "elysia" },
        ]}
        defaultValue="nextjs"
      >
        <TabsContent value="nextjs">
          <Steps>
            <Step>
              <DocsSubtitle title="Install Better Auth" withoutLink />
              <StepContent>
                <DocsParagraph>
                  Install Better Auth by running the following command{" "}
                  <DocsLink href="https://better-auth.com" _blank>
                    Better Auth Docs
                  </DocsLink>
                </DocsParagraph>
                <DocsCodeCommand command="better-auth" />
              </StepContent>
            </Step>
            <Step>
              <DocsSubtitle title="Install Shadcn UI" withoutLink />
              <StepContent>
                <DocsParagraph>
                  Run the init command to create a new Next.js project or to
                  setup an existing one.
                </DocsParagraph>
                <DocsCodeCommandX command="shadcn@latest init" />
              </StepContent>
            </Step>
            <Step>
              <DocsSubtitle title="Add registry" withoutLink />
              <StepContent>
                <DocsParagraph>
                  Add the auth-ui registry in your components.json
                </DocsParagraph>
                <DocsCodeBlock
                  name="components.json"
                  code={registrycode}
                  language="json"
                />
              </StepContent>
            </Step>
          </Steps>
        </TabsContent>

        <TabsContent value="hono">
          <Steps>
            <Step>
              <DocsSubtitle title="Install Better Auth" withoutLink />
              <StepContent>
                <DocsParagraph>
                  Install Better Auth by running the following command{" "}
                  <DocsLink href="https://better-auth.com" _blank>
                    Better Auth Docs
                  </DocsLink>
                </DocsParagraph>
                <DocsCodeCommand command="better-auth" />
              </StepContent>
            </Step>
            <Step>
              <DocsSubtitle title="Configure path aliases" withoutLink />
              <StepContent>
                <DocsParagraph>
                  Configure the path aliases in your tsconfig.json file.
                </DocsParagraph>
                <DocsCodeBlock
                  name="tsconfig.json"
                  code={tsconfigJson}
                  language="json"
                />
              </StepContent>
            </Step>
            <Step>
              <DocsSubtitle title="Add components.json" withoutLink />
              <StepContent>
                <DocsParagraph>
                  Create a{" "}
                  <DocsLink
                    href="https://ui.shadcn.com/docs/components-json"
                    _blank
                  >
                    components.json
                  </DocsLink>{" "}
                  file in the root of your project.
                </DocsParagraph>
                <DocsCodeBlock
                  name="components.json"
                  code={componentsJson}
                  language="json"
                />
              </StepContent>
            </Step>
          </Steps>
        </TabsContent>

        <TabsContent value="elysia">
          <Steps>
            <Step>
              <DocsSubtitle title="Install Better Auth" withoutLink />
              <StepContent>
                <DocsParagraph>
                  Install Better Auth by running the following command{" "}
                  <DocsLink href="https://better-auth.com" _blank>
                    Better Auth Docs
                  </DocsLink>
                </DocsParagraph>
                <DocsCodeCommand command="better-auth" />
              </StepContent>
            </Step>
            <Step>
              <DocsSubtitle title="Configure path aliases" withoutLink />
              <StepContent>
                <DocsParagraph>
                  Configure the path aliases in your tsconfig.json file.
                </DocsParagraph>
                <DocsCodeBlock
                  name="tsconfig.json"
                  code={tsconfigJson}
                  language="json"
                />
              </StepContent>
            </Step>
            <Step>
              <DocsSubtitle title="Add components.json" withoutLink />
              <StepContent>
                <DocsParagraph>
                  Create a{" "}
                  <DocsLink
                    href="https://ui.shadcn.com/docs/components-json"
                    _blank
                  >
                    components.json
                  </DocsLink>{" "}
                  file in the root of your project.
                </DocsParagraph>
                <DocsCodeBlock
                  name="components.json"
                  code={componentsJson}
                  language="json"
                />
              </StepContent>
            </Step>
          </Steps>
        </TabsContent>
      </DocsTabs>
    </div>
  );
}

const registrycode = `{
  "registries": {
    "@auth-cn": "https://auth.uprizing.me/r/{name}.json",
  }
}
`;

const componentsJson = `{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "new-york",
  "rsc": false,
  "tsx": true,
  "tailwind": {
    "config": "",
    "css": "src/styles/globals.css",
    "baseColor": "neutral",
    "cssVariables": false,
    "prefix": ""
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  },
  "registries": {
    "@auth-cn": "https://auth.uprizing.me/r/{name}.json"
  }
}
`;

const tsconfigJson = `{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"]
    }
  }
}`;
