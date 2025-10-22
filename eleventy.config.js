import { RenderPlugin } from "@11ty/eleventy";

export default function (eleventyConfig) {
  eleventyConfig.addPlugin(RenderPlugin);

  eleventyConfig.setInputDirectory("src");

  eleventyConfig.addPassthroughCopy({
    "./src/css": "/assets/css"
  });

  eleventyConfig.addPassthroughCopy({
    "./src/fonts": "/assets/fonts"
  });

  eleventyConfig.addPassthroughCopy({
    "./src/js": "/assets/js"
  });
}
