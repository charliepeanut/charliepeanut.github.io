import { RenderPlugin } from "@11ty/eleventy";
import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";

export default function (eleventyConfig) {
  eleventyConfig.addPlugin(RenderPlugin);
  eleventyConfig.addPlugin(eleventyImageTransformPlugin);

  eleventyConfig.setInputDirectory("src");
  eleventyConfig.setDataDirectory("./src/vault")

  eleventyConfig.addPassthroughCopy({
    "./src/css": "/assets/css"
  });

  eleventyConfig.addPassthroughCopy({
    "./src/fonts": "/assets/fonts"
  });

  eleventyConfig.addPassthroughCopy({
    "./src/js": "/assets/js"
  });

  // Filtrando por `label`
  // eleventyConfig.addCollection("keyMustExistInData", function (collectionsApi) {
	// 	return collectionsApi.getAll().filter(function (item) {
	// 		// Side-step tags and do your own filtering
	// 		return item.data.label == filter_label
	// 	});
	// });

  // Cria uma coleção "vault" que pega tudo dentro de src/vault/
  eleventyConfig.addCollection("vault", (collectionApi) => {
    return collectionApi.getFilteredByGlob("src/vault/**/*.md");
  });

	// Sort with `Array.sort`
	eleventyConfig.addCollection("studies_by_date", function (collectionsApi) {
		return collectionsApi.getAll().sort(function (a, b) {
			//return a.date - b.date; // sort by date - ascending
			if (b.date && a.date) return b.date - a.date; // sort by date - descending
			//return a.inputPath.localeCompare(b.inputPath); // sort by path - ascending
			//return b.inputPath.localeCompare(a.inputPath); // sort by path - descending
		});
	});
}
