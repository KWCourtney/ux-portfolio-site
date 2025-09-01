// eleventy-sample/.eleventy.js
const markdownIt = require("markdown-it");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  // Passthrough copy for static assets
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("js");
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("favicon");

    // ADD THIS LINE
  eleventyConfig.addPassthroughCopy("test.html");

  // Shortcodes
  eleventyConfig.addShortcode("fullWidthImage", function(src, alt, caption) {
    let captionHtml = caption ? `<figcaption>${caption}</figcaption>` : "";
    return `<figure class="full-width-image"><img src="${eleventyConfig.getFilter("url")(src)}" alt="${alt || ''}">${captionHtml}</figure>`;
  });

  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  // Add a dedicated collection for case studies
  eleventyConfig.addCollection("caseStudies", function(collectionApi) {
    return collectionApi.getFilteredByTag("caseStudy").sort((a, b) => a.data.eleventyNavigation.order - b.data.eleventyNavigation.order);
  });

  // *** THIS IS THE KEY ADDITION ***
  // Create a custom collection for your main navigation, including the "Work" parent
  eleventyConfig.addCollection("primaryNav", function(collectionApi) {
    return [
      {
        key: "Work",
        title: "Work", 
        url: "/#work"  
      },
      {
        key: "About",
        title: "About",
        url: "/about/"
      },
      {
        key: "Process",
        title: "Process",
        url: "/process/"
      },
      {
        key: "Resume",
        title: "Resume",
        url: "https://www.dropbox.com/scl/fo/wpen8quxv5i9tgvecyfsm/ADxKxPqCP2b0PCFWvGNBlZU?rlkey=fqo23mld0pha8ezhkr2ek6egb&st=1qnexu8n&dl=0",
        isExternal: true 
      },
      {
        key: "Contact",
        title: "Contact",
        url: "/contact/"
      }
    ];
  });

  // Markdown-it configuration
  let markdownItOptions = {
    html: true,
    breaks: true,
    linkify: true
  };
  eleventyConfig.setLibrary("md", markdownIt(markdownItOptions));

  // BrowserSync configuration
  eleventyConfig.setBrowserSyncConfig({
    files: [ './_site/**/*' ],
  });

  return {
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dir: {
      input: ".",
      output: "_site",
      includes: "_includes",
      layouts: "_includes/layouts",
      data: "_data"
    },
  };
};