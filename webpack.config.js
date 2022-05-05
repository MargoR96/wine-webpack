const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = () => {
    return {
        mode: 'none',
        devtool: false,
        plugins: [
            new HtmlWebpackPlugin(
                {
                    template: './src/index.html'
                }
            )
        ]
    };
};