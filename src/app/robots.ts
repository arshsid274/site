import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // The domain previously served a LiteSpeed default directory index
      // exposing /cgi-bin/. Kept disallowed so it cannot be re-indexed.
      disallow: ["/cgi-bin/"],
    },
    sitemap: `${SITE.url}/sitemap.xml`,
  };
}
