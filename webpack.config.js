const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// let pathsToClean = ['dist'];
let cleanOptions = {
    verbose: true,
};

module.exports = () => {
    return {
        mode: 'none',
        output: {
            path: path.resolve(__dirname, 'dist'),
        },
        devtool: false,
        plugins: [
            new HtmlWebpackPlugin(
                {
                    template: './src/index.html'
                }
            ),
            new CleanWebpackPlugin(cleanOptions),
        ]
    };
};