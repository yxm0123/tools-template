const path = require('path')

module.exports = {
    mode: 'production',
    // entry: './src/index.ts',
    entry: path.join(__dirname, 'src/index.ts'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
        libraryTarget: 'umd'
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.tsx$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        ]
    },
    devServer:{
        hot: true,
        host: '0.0.0.0',
        compress: true,
        port: 9000,
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        // contentBase: path.join(__dirname, "dist")
    }
}
