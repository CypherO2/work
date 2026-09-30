import type { Metadata } from "next";
import {
  Atkinson_Hyperlegible,
  IBM_Plex_Mono,
  Lexend,
} from "next/font/google";
import "@fontsource/opendyslexic/latin-400.css";
import "@fontsource/opendyslexic/latin-700.css";
import "@/css/globals.css";
import A11yApply from "@/components/A11yApply";
import NavComp from "@/components/Core/NavbarComp";
import Starfield from "@/components/Starfield";
import { A11Y_BOOT_SCRIPT } from "@/lib/a11y";
import { cx } from "@/lib/ui";

const plexMono = IBM_Plex_Mono({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-plex",
});

const lexend = Lexend({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-lexend",
});

const atkinson = Atkinson_Hyperlegible({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-atkinson",
});

export const metadata: Metadata = {
  title: "CJ Presley | Home",
  description: "Personal site for projects, art, and writing.",
  icons: { icon: "/favicon.png" },
  openGraph: {
    title: "CJ Presley",
    description: "Personal site for projects, art, and writing.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cx(plexMono.variable, lexend.variable, atkinson.variable)}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: A11Y_BOOT_SCRIPT }} />
      </head>
      <body>
        <A11yApply />
        <Starfield />
        <div className="relative z-[1] flex min-h-dvh flex-col lg:block">
          <NavComp />
          <div className="flex min-h-dvh min-w-0 flex-1 flex-col lg:pl-60">
            <main className="relative block flex-1">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
