const path = require('path'); // CommonJS

module.exports = {
    mode: 'production',
    entry: './Front-End/src/index.js',
    output:{ 
        path: path.resolve(__dirname, 'Front-End','public', 'assets', 'js'),
        filename: 'bundle.js'
    },
    module : {
        rules: [{
            exclude: /node_modules/,
            test: /\.js$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/env']
                }
            }
        }]
    },
    devtool: 'source-map'
}