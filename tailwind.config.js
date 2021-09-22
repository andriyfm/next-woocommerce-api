module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayerByDefault: true,
  },
  purge: [
    "./src/components/**/*.js",
    "./src/pages/**/*.js",
    "./src/components/**/*.tsx",
    "./src/pages/**/*.tsx",
  ],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [require("tailwindcss"), require("precss"), require("autoprefixer")],
};
