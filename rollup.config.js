// rollup.config.js
export default [
  {
    input: "index.js",
    output: [
      {
        file: "index.cjs",
        format: "cjs",
        exports: "default",
      },
      {
        file: "index.mjs",
        format: "es",
      },
    ],
  },
];
