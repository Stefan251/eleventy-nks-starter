const eleventySass = require("eleventy-sass");
const markdownIt = require("markdown-it");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");


module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  let options = {
    html: true,
    breaks: true,
    linkify: true
  };
  eleventyConfig.setLibrary("md", markdownIt(options));

    eleventyConfig.addPlugin(eleventySass);
    return {
      dir: {
        input: "src",
        output: "public"
      }
    };
  
  };