function removeTodos() {
  return {
    name: "vite-plugin-remove-todos",
    transform(code, id) {
      // Process .js, .ts, .jsx, .tsx, .astro, and .html files
      if (!/\.(js|ts|jsx|tsx|astro|html)$/.test(id)) {
        return null;
      }

      let updatedCode = code;

      // Remove HTML comments containing TODO
      updatedCode = updatedCode.replace(/<!--\s*TODO:[\s\S]*?-->/g, "");

      // Remove single-line TODO comments
      updatedCode = updatedCode.replace(/\/\/\s*TODO:.*$/gm, "");

      // Remove multi-line TODO comments
      updatedCode = updatedCode.replace(/\/\*\s*TODO:[\s\S]*?\*\//g, "");

      if (updatedCode !== code) {
        return {
          code: updatedCode,
          map: null,
        };
      }

      return null;
    },
  };
}

export { removeTodos as default };
