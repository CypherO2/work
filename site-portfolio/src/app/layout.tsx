import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import Script from "next/script";
import "@/css/globals.css";
import NavComp from "@/components/Core/NavbarComp";
import Starfield from "@/components/Starfield";
import { A11Y_BOOT_SCRIPT } from "@/lib/a11y";

const plexMono = IBM_Plex_Mono({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-plex",
});

export const metadata: Metadata = {
  title: "Cj Presley | Home",
  description: "Personal site for projects, art, and writing.",
  icons: { icon: "/favicon.png" },
  openGraph: {
    title: "Cj Presley | Site",
    description: "Personal GitHub Pages site.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={plexMono.variable} suppressHydrationWarning>
      <body>
        <Script
          id="a11y-boot"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: A11Y_BOOT_SCRIPT }}
        />
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
