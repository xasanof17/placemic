import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
  return [
    {
      url: `${BASE_URL}`,
      lastModified: new Date(),
    },
  ];
}
