import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "AnC's Portfolio",
  description: "Hi, I'm AnC, a software developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
