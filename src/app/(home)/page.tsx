// Component are picked from
// https://github.com/chronark/chronark.com and adapted to this project

import { GithubIcon } from "lucide-react";
import { Link } from "next-view-transitions";
import ThemeToggle from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { DocsLink } from "@/components/docs/docs-typography";

const navigation = [
  { name: "Docs", href: "/docs" },
  {
    name: "Creator",
    href: "https://x.com/MrUprizing",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden">
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm duration-100 font-mono text-muted-foreground hover:text-primary"
            >
              {item.name}
            </Link>
          ))}
          <div className="w-px h-6 bg-muted-foreground/20 ml-3" />
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button variant="outline" size="sm" asChild>
              <Link
                href="https://github.com/MrUprizing/auth-cn"
                target="_blank"
              >
                Star on GitHub
                <GithubIcon size={10} />
              </Link>
            </Button>
          </div>
        </ul>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-linear-to-r from-zinc-700/0 via-zinc-700/50 to-zinc-700/0 dark:from-zinc-300/0 dark:via-zinc-300/50 dark:to-zinc-300/0" />

      <h1 className="py-3.5 px-0.5 z-10 font-bold text-4xl font-doto text-transparent duration-1000 dark:bg-white bg-black cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
        Auth CN
      </h1>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-linear-to-r from-zinc-700/0 via-zinc-700/50 to-zinc-700/0 dark:from-zinc-300/0 dark:via-zinc-300/50 dark:to-zinc-300/0" />
      <div className="my-16 text-center animate-fade-in">
        <h2 className="text-muted-foreground font-mono">
          Full-stack Components for{" "}
          <DocsLink href="https://better-auth.com/" _blank>
            Better Auth
          </DocsLink>{" "}
          using{" "}
          <DocsLink href="https://ui.shadcn.com" _blank>
            shadcn/registry
          </DocsLink>
          .
        </h2>
      </div>
    </div>
  );
}
