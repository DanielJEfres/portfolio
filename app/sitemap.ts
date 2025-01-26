import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://www.danielefres.dev",
            lastModified: new Date(),
            priority: 1,
        },
        {
            url: "https://www.danielefres.dev/experience",
            lastModified: new Date(),
            priority: 0.9,
        },
        {
            url: "https://www.danielefres.dev/projects",
            lastModified: new Date(),
            priority: 0.9,
        },
        {
            url: "https://www.danielefres.dev/skills",
            lastModified: new Date(),
            priority: 0.7,
        },

    ];
}