"use strict"

module.exports = {
    entry : "./src/js/app.js",
    output: {
        path : __dirname + "/dist", 
        filename : "bundle.js",
        libraryTarget: "var",
        library: "dv"
    },
    module : {
        rules : [
            {
                test: /\.css$/, 
                use: ["style-loader", "css-loader"]
            },
            {
                test:/\.js$/,
                loader:"babel-loader",
                exclude: /node_modules/,
                query: {
                    presets:["es2015"]
                }
            }
        ]
    }
}