module.exports = {
    sourceMaps: 'inline',
    presets: [
        ['@babel/preset-env', { targets: { node: 'current' } }],
        '@babel/preset-typescript',
        '@vue/cli-plugin-babel/preset',
    ],
    plugins: [
        [
            'import',
            {
                libraryName: 'vant', libraryDirectory: 'es', style: true,
            },
            'vant',
        ],
    ],
};
