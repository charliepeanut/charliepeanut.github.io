import { RenderPlugin } from "@11ty/eleventy";
import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";
import fs from "fs";

export default function (eleventyConfig) {
  eleventyConfig.addPlugin(RenderPlugin);

  // Importa o site.json dentro de src/vault manualmente
  const siteData = JSON.parse(fs.readFileSync("src/vault/site.json", "utf8"));

  // Torna o objeto "site" acessível globalmente
  eleventyConfig.addGlobalData("site", siteData);

  // Copia assets (opcional)
  eleventyConfig.addPassthroughCopy({ "./src/css": "/assets/css" });
  eleventyConfig.addPassthroughCopy({ "./src/fonts": "/assets/fonts" });
  eleventyConfig.addPassthroughCopy({ "./src/js": "/assets/js" });

  // Coleção com todas as notas do vault
  eleventyConfig.addCollection("vault", (collectionApi) => {
    return collectionApi.getFilteredByGlob("src/vault/**/*.md");
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site"
    }
  };
}
