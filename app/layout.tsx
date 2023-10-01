import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Footer, Header } from "@/layouts";
import { HeaderLinks } from "@/layouts/Header/HeaderLinks";
import { HeaderBottomSheet } from "@/layouts/Header/HeaderBottomSheet";

const roboto = Roboto({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500"],
  display: "auto",
});

export const metadata: Metadata = {
  title: {
    template: "%s - PlaceMic",
    default: "PlaceMic",
  },
  description: "Made in Korea - PlaceMic",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        {children}
        <HeaderBottomSheet />
        <Footer />
      </body>
    </html>
  );
}
