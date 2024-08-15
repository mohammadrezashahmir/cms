const path = require("path");
const BundleTracker = require('webpack-bundle-tracker');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
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
        publicPath: '/static/dist/',
    },


    plugins: [
        new CleanWebpackPlugin(),
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
    },
    watchOptions: {
        ignored: /node_modules/,  // نادیده گرفتن تغییرات در node_modules
        aggregateTimeout: 300,    // تاخیر 300 میلی‌ثانیه برای build
        poll: 1000,               // بررسی تغییرات هر 1000 میلی‌ثانیه
    }
}

module.exports = (env, argv) => {

    if (argv.mode === 'production') {
        config.devtool = 'none';
    }
    return config
};
