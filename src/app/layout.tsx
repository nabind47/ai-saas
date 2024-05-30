import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

import ThemeProvider from "@/providers/theme-provider";

const font = Roboto({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "AI Park",
  description:
    "The Future of Productivity is Coming Soon Get Ready to Unleash Your Potential",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={font.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
