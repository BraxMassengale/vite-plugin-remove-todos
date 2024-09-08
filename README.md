# vite-plugin-remove-todos

A Vite plugin to remove TODO comments during the build process.

## Installation

```bash
npm install vite-plugin-remove-todos
```

## Usage

In your Vite config file (vite.config.js or astro.config.mjs):

```javascript
import removeTodos from 'vite-plugin-remove-todos';

export default {
  plugins: [removeTodos()]
}
```

This plugin will remove single-line and multi-line TODO comments from .js, .ts, .jsx, .tsx, and .astro files during the build process.

## Options

Currently, this plugin doesn't accept any options. It removes all TODO comments by default.

## License

MIT
