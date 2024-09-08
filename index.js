export default function removeTodos() {
  return {
    name: "vite-plugin-remove-todos",
    transform(code, id) {
      // Only process .js, .ts, .jsx, .tsx, and .astro files
      if (!/\.(js|ts|jsx|tsx|astro)$/.test(id)) {
        return null;
      }

      // Remove single-line TODO comments
      code = code.replace(/\/\/\s*TODO:.*$/gm, "");

      // Remove multi-line TODO comments
      code = code.replace(/\/\*\s*TODO:[\s\S]*?\*\//g, "");

      return {
        code,
        map: null,
      };
    },
  };
}
