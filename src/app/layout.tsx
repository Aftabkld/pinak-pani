import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pinak Pani Enterprises",
  description: "Premium spices crafted for kitchens that value purity, aroma, and trust."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
