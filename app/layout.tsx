import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Footer, Header } from "@/layouts";
import { HeaderBottomSheet } from "@/layouts/Header/HeaderBottomSheet";
import { meta } from "@/meta";

const roboto = Roboto({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500"],
});

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const metadata: Metadata = {
  title: {
    template: "%s - Placemic",
    default: "Placemic - Your Destination for Korean Products",
  },
  description: meta.description,
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
  abstract: "Online shop",
  publisher: "Vercel",
  referrer: "origin",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    title: "Placemic - Your Destination for Korean Products",
    description: meta.description!,
    countryName: "Uzbekistan",
    siteName: "Placemic",
    alternateLocale: [""],
    url: BASE_URL,
    phoneNumbers: ["+998900198505"],
    images: [
      {
        url: `${BASE_URL}/opengraph-image.png`,
        width: 500,
        height: 500,
      },
      {
        url: `${BASE_URL}/twitter-image.png`,
        width: 500,
        height: 500,
      },
    ],
  },
  twitter: {
    title: "xasanof17",
    card: "summary_large_image",
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
