import type { Metadata } from "next";
import { Lato, Fira_Sans } from "next/font/google";
import "@/styles/globals.css";
import { twMerge } from "tailwind-merge";

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-lato",
});

const firaSans = Fira_Sans({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-fira",
});

export const metadata: Metadata = {
  title: "Lnk.bio - Simplify Your Links",
  description:
    "Simplify your online presence with a single, customizable link.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={twMerge(
          "flex h-screen w-full flex-col items-center justify-center bg-gray-50 text-slate-800",
          lato.className,
          firaSans.className,
        )}
      >
        <div className="container h-full w-full pt-2">{children}</div>
      </body>
    </html>
  );
}
