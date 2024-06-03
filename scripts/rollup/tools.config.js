export default [
  {
    input: "src/tools.ts",
    output: {
      file: "dist/tools.js",
      format: "cjs",
    },
    external: ["tslib"],
    plugins: [],
  },
];
