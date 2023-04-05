module.exports = {
  semi: false,
  tabWidth: 2,
  singleQuote: true,
  printWidth: 120,
  plugins: [
    "prettier-plugin-astro",
    "prettier-plugin-tailwindcss", // must come last
  ],
  trailingComma: "es5",
  files: ["*.html", "*.css", "*.js", "*.liquid", "*.md", "*.astro"],
};
