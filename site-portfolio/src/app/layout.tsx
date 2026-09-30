import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@/css/globals.css";
import NavComp from "@/components/Core/NavbarComp";
import FootComp from "@/components/Core/FooterComp";
import Starfield from "@/components/Starfield";

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
    <html lang="en" className={plexMono.variable}>
      <body className={plexMono.className}>
        <Starfield />
        <NavComp />
        <main className="relative z-[1] block min-h-[calc(100vh-3.5rem-6rem)]">
          {children}
        </main>
        <FootComp />
      </body>
    </html>
  );
}
