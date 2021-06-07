module.exports = {
    publicPath: '',
    devServer: {
        historyApiFallback: false,
        port: 8080,
        https: false,
        // open: true, // automatically open browser
    },
    chainWebpack: (config) => config.resolve.symlinks(false),
};
