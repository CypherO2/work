import type { Metadata } from "next";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@/css/core.css";
import NavComp from "@/components/Core/NavbarComp";
import FootComp from "@/components/Core/FooterComp";

const basePath = process.env.NODE_ENV === "production" ? "/work" : "";

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
    <html lang="en">
      <body
        style={{
          backgroundImage: `linear-gradient(to bottom right, rgba(10, 10, 10, 0.417), rgba(9, 70, 139, 0.184)), url(${basePath}/BGImg2.png)`,
        }}
      >
        <NavComp />
        <span style={{ backgroundColor: "rgb(10,10,10)" }}>{children}</span>
        <FootComp />
      </body>
    </html>
  );
}
