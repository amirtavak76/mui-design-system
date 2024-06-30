import { defineConfig } from 'vite';
import { extname, relative, resolve } from 'path';
import { glob } from 'glob';
import { fileURLToPath } from 'node:url';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        dts(),
    ],
    build: {
        lib: {
            entry: resolve(__dirname, 'lib/main.ts'),
            name: 'mui-design-system',
            formats: ['es'],
            fileName: 'mui-design-system',
        },
        rollupOptions: {
            // make sure to externalize deps that shouldn't be bundled
            // into your library
            external: ['react', 'react-dom', 'react/jsx-runtime', '@mui/material'],
            input: Object.fromEntries(glob.sync('lib/**/*.{ts,tsx}').map(function (file) { return [
                // This remove `src/` as well as the file extension from each
                // file, so e.g. src/nested/foo.js becomes nested/foo
                relative('lib', file.slice(0, file.length - extname(file).length)),
                // This expands the relative paths to absolute paths, so e.g.
                // src/nested/foo becomes /project/src/nested/foo.js
                fileURLToPath(new URL(file, import.meta.url))
            ]; })),
            output: {
                entryFileNames: '[name].js',
            },
        },
    },
});
