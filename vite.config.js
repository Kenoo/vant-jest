import { defineConfig } from 'vite';
import path from 'path';

import vue from '@vitejs/plugin-vue';

import { viteCommonjs } from '@originjs/vite-plugin-commonjs';

import styleImport from 'vite-plugin-style-import';

// https://vitejs.dev/config/
export default defineConfig({
    base: '/vant-jest/',
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            '@common': path.resolve(__dirname, './src/view/common'),
        },
    },
    plugins: [
        vue(),
        viteCommonjs(),
        styleImport({
            libs: [
                {
                    libraryName: 'vant',
                    esModule: true,
                    resolveStyle: (name) => `vant/es/${name}/style`,
                },
            ],
        }),
    ],
    server: {
        cors: true,
    },
});
