import { defineConfig } from 'vite';
import path from 'path';

import vue from '@vitejs/plugin-vue';
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

});
