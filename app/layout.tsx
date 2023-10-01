import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Footer, Header } from "@/layouts";
import { HeaderBottomSheet } from "@/layouts/Header/HeaderBottomSheet";

const roboto = Roboto({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500"],
});

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const metadata: Metadata = {
  title: {
    template: "%s - PlaceMic",
    default: "PlaceMic",
  },
  description: "Товары из Кореи от производителя",
  applicationName: "Placemic",
  assets: `${BASE_URL}/assets`,
  classification: "My Classification",
  authors: {
    name: "Xasanov Javohir",
    url: "https://portfoliowebapp.vercel.app",
  },
  colorScheme: "light",
  creator: "JX Team",
  generator: "Next.js",
  alternates: {
    canonical: BASE_URL,
    types: {
      type: "website",
    },
  },
  metadataBase: new URL(`${BASE_URL}`),
  verification: {
    google: "google_site_verification=12121212",
  },
  icons: [
    {
      url: `${BASE_URL}/favicon.ico`,
    },
    {
      url: `${BASE_URL}/apple-icon.svg`,
    },
  ],
  keywords: ["Placemic", "Placemic in Korea", "Selling Placemic"],
  manifest: new URL(`${BASE_URL}/manifest.webmanifest`),
  openGraph: {
    type: "website",
    title: "Placemic",
    description: "Товары из Кореи от производителя",
    countryName: "Uzbekistan",
    siteName: "Placemic",
    alternateLocale: [""],
    url: BASE_URL,
    phoneNumbers: ["+998900198505"],
    images: [
      {
        url: `${BASE_URL}/opengraph-image.png`,
        width: 300,
        height: 200,
      },
      {
        url: `${BASE_URL}/twitter-image.png`,
        width: 300,
        height: 200,
      },
    ],
  },
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
        <Footer />
        <HeaderBottomSheet />
      </body>
    </html>
  );
}
