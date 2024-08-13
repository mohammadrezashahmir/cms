const path = require("path");
const BundleTracker = require('webpack-bundle-tracker');
var config = {
    context: __dirname,
    entry: {
        'staticfiles': './src/index.js',
    },

    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src/'),
            '@django': path.resolve(__dirname, '../static/'),

        }
    },
    output: {
        path: path.join(__dirname, './assets/dist'),
        filename: "[name]-[hash].js",
        publicPath: '/static/dist/'
    },


    plugins: [
        new BundleTracker({filename: './webpack-stats.json'}),
    ],
    devtool: 'cheap-module-eval-source-map',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
                include: [
                    path.resolve(__dirname, "src"),
                ],
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader', 'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader',
                ],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader',
                ],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/',
                            publicPath: '/static/dist/fonts/'
                        }
                    }
                ],
            },
        ]
    }
}

module.exports = (env, argv) => {

    if (argv.mode === 'production') {
        config.devtool = 'none';
    }
    return config
};
