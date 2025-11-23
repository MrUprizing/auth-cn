// Component are picked from
// https://github.com/legions-developer/evilcharts/ and adapted to this project
import { Code2, EyeIcon } from "lucide-react";
import Image from "next/image";
import { Link } from "next-view-transitions";
import type { BundledLanguage } from "shiki";
import { IconCodeEditor, IconLink } from "@/assets";
import Code from "@/components/ui/code";
import CodeBlockHtml from "@/components/ui/code";
import { CopyButton } from "@/components/ui/copy-button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { InstallCommandGroup } from "../install-command-group";
import { OpenInV0Button } from "../open-v0";
import "@/styles/image-zoom.css";
import Zoom from "react-medium-image-zoom";
import { Button } from "@/components/ui/button";
import type { ImageZoomProps } from "@/types/image-zoom";
import { DocsCodeCommand, DocsCodeCommandX } from "./docs-code-commands";

function getImageSrc(src: ImageZoomProps["src"]): string {
  if (typeof src === "string") return src;
  return src.src;
}

const DocsTitle = ({
  className,
  title,
}: {
  className?: string;
  title: string;
}) => {
  return (
    <h2 id={title} className={cn(className, "text-2xl sm:text-3xl font-bold")}>
      <a href={`#${title}`}>{title}</a>
    </h2>
  );
};

const DocsSubtitle = ({
  className,
  title,
  withoutLink = false,
}: {
  className?: string;
  title: string;
  withoutLink?: boolean;
}) => {
  return (
    <h3 id={title} className={cn(className, "text-xl font-medium mt-4")}>
      {withoutLink ? title : <a href={`#${title}`}>{title}</a>}
    </h3>
  );
};

const DocsDescription = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p
      className={cn(className, "text-muted-foreground text-xs sm:text-sm mt-1")}
    >
      {children}
    </p>
  );
};

const DocsSubDescription = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p
      className={cn(
        className,
        "text-muted-foreground/70 text-xs sm:text-[13px] font-light mt-1",
      )}
    >
      {children}
    </p>
  );
};

const DocsParagraph = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p className={cn(className, "text-muted-foreground text-sm mt-2")}>
      {children}
    </p>
  );
};

const DocsContainerLinks = ({
  className,
  links,
}: {
  className?: string;
  links: { title: string; href: string; _blank?: boolean }[];
}) => {
  return (
    <div className={cn(className, "flex flex-row gap-2 mt-3")}>
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          target={link._blank !== false ? "_blank" : "_self"}
          className="border bg-card hover:text-primary rounded-sm px-2 text-xs shadow-xs hover:bg-accent dark:bg-input/50 dark:border-input dark:hover:bg-input/70 group"
        >
          {link.title}

          <IconLink className="inline ml-0.5 text-muted-foreground group-hover:text-primary duration-200 size-3.5" />
        </Link>
      ))}
    </div>
  );
};

const DocsLink = ({
  children,
  className,
  href,
  _blank,
}: {
  children: React.ReactNode;
  className?: string;
  href: string;
  _blank?: boolean;
}) => {
  return (
    <Link
      href={href}
      target={_blank ? "_blank" : "_self"}
      className={cn(className, "text-primary group")}
    >
      <span className="relative">
        <span className="absolute -bottom-px h-px rounded w-full bg-primary/50 transition-all duration-300 group-hover:w-full group-hover:bg-primary"></span>
        {children}
      </span>
      <IconLink className="inline ml-0.5 group-hover:text-primary text-muted-foreground duration-200 size-2.5" />
    </Link>
  );
};

// Component are picked from
// https://github.com/fuma-nama/fumadocs and adapted to this project

const DocsImage = ({
  src,
  alt,
  width,
  height,
  zoomInProps,
  rmiz,
}: ImageZoomProps) => {
  const imageSrc = getImageSrc(src);

  return (
    <Zoom
      zoomMargin={20}
      wrapElement="span"
      {...rmiz}
      zoomImg={{
        src: imageSrc,
        sizes: undefined,
        ...zoomInProps,
      }}
    >
      <Image
        src={imageSrc}
        alt={alt}
        className="rounded-xl border mt-2"
        width={width ? Number(width) : 900}
        height={height ? Number(height) : 600}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 900px "
      />
    </Zoom>
  );
};

const DocsCodeBlock = async ({
  name,
  code,
  language,
}: {
  name: string;
  code: string;
  language: BundledLanguage;
}) => {
  return (
    <div className="w-full max-w-5xl mx-auto rounded-xl border dark:[--color-muted:var(--color-zinc-900)] overflow-hidden flex flex-col mt-4">
      <header className="flex flex-wrap items-center justify-between px-4 py-0.5 bg-card border-b rounded-t-xl">
        <div className="flex items-center gap-2">
          <IconCodeEditor />
          <h3 className="font-medium text-sm font-mono">{name}</h3>
        </div>

        <CopyButton code={code} />
      </header>
      <section className="flex-1 overflow-auto max-h-[450px] py-3 rounded-b-xl">
        <CodeBlockHtml code={code} language={language} heightAuto />
      </section>
    </div>
  );
};

const DocsCodePreview = ({
  name,
  component: Component,
  code,
  language,
  category,
  itemName,
}: {
  name: string;
  component: React.ComponentType;
  code: string;
  language: string;
  category?: string;
  itemName?: string;
}) => {
  return (
    <div className="w-full max-w-5xl mx-auto rounded-xl border dark:[--color-muted:var(--color-zinc-900)] overflow-hidden flex flex-col mt-4">
      <Tabs defaultValue="preview" className="flex-1 flex flex-col">
        <div className="flex flex-wrap items-center justify-between px-4 py-2 bg-card rounded-t-xl border">
          <TabsList className="bg-card">
            <TabsTrigger value="preview" className="px-3 py-1.5 text-sm">
              <EyeIcon />
              Preview
            </TabsTrigger>
            <TabsTrigger value="code" className="px-3 py-1.5 text-sm">
              <Code2 />
              Code
            </TabsTrigger>
          </TabsList>
          <div className="flex gap-2">
            <InstallCommandGroup componentName={name} />
            {/*Page preview*/}

            {/*{category && itemName && (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Button variant="outline" size="icon-sm" disabled asChild>
                      <Link
                        // href={`/view/${category}/${itemName}`}
                        href={`/view/ui/${name}`}
                        target="_blank"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <title>ss</title>
                          <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
                        </svg>
                      </Link>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <span>Preview</span>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}*/}
            <Tooltip>
              <TooltipTrigger asChild>
                <OpenInV0Button
                  url={`https://auth.uprizing.me/r/${name}.json`}
                />
              </TooltipTrigger>
              <TooltipContent>Open in v0</TooltipContent>
            </Tooltip>
          </div>
        </div>
        <div className="flex-1 overflow-auto">
          <TabsContent value="preview" className="h-full">
            <div className="flex items-center justify-center py-10">
              <Component />
            </div>
          </TabsContent>
          <TabsContent value="code" className="h-full max-h-[500px] py-5">
            <Code code={code} language={language as BundledLanguage} />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};

const DocsTabs = ({
  items,
  defaultValue,
  children,
}: {
  items: Array<{ label: string; value: string }>;
  defaultValue: string;
  children: React.ReactNode;
}) => {
  return (
    <Tabs defaultValue={defaultValue} className="mt-4">
      <TabsList className="h-auto rounded-none border-b bg-background p-0">
        {items.map((item) => (
          <TabsTrigger
            key={item.value}
            value={item.value}
            className="relative rounded-t-md border-none bg-transparent py-2 after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 data-[state=active]:shadow-none data-[state=active]:after:bg-primary hover:bg-transparent"
          >
            {item.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {children}
    </Tabs>
  );
};

export {
  DocsTitle,
  DocsSubtitle,
  DocsSubDescription,
  DocsParagraph,
  DocsContainerLinks,
  DocsDescription,
  DocsLink,
  DocsImage,
  DocsCodeBlock,
  DocsCodePreview,
  DocsCodeCommand,
  DocsCodeCommandX,
  DocsTabs,
};
