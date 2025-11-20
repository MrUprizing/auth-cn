import type { Metadata } from "next";
import { Doto, Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ViewTransitions } from "next-view-transitions";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const doto = Doto({
  variable: "--font-doto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://auth.uprizing.me"),
  title: "Auth CN",
  description:
    "Full-stack Components for Better Auth built with shadcn/registry.",
  keywords: ["Better Auth", "Shadcn ui", "Next.js", "React", "JavaScript"],
  openGraph: {
    title: "Auth CN",
    description:
      "Full-stack Components for Better Auth built with shadcn/registry.",
    url: "/",
    siteName: "Auth CN",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Auth CN",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Auth CN",
    description: "Component library for Better Auth built with shadcn/ui.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en" suppressHydrationWarning>
        <body
          className={cn(
            geistMono.variable,
            geistSans.variable,
            doto.variable,
            "antialiased font-sans",
          )}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
          <Analytics />
          <SpeedInsights />
        </body>
      </html>
    </ViewTransitions>
  );
}
