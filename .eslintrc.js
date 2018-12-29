module.exports = {
    parser: "babel-eslint",
    parserOptions: { emcaVersion: 6 },
    env: { es6: true },
    extends: "airbnb",
    plugins: ["react", "jsx-ally", "import"],
    rules: {
      quotes: [2, "double"]
    }
  };