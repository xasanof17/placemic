import { meta } from "@/meta";
import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Placemic",
    short_name: "Placemic",
    description: meta.description!,
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "16x16",
        type: "image/ico",
      },
      {
        src: "/apple-icon.svg",
        sizes: "16x16",
        type: "image/svg+xml",
      },
    ],
  };
}
