const path = require("path")
const WebpackNodeExternals = require("webpack-node-externals")

module.exports = {
    entry: "./src/app.ts",
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "app.js",
    },
    externals: [
        WebpackNodeExternals(),
    ],
    target: "node",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: ["ts-loader"],
            },
        ]
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", "jsx"],
        alias: {
            "~": path.resolve(__dirname, "src/"),
        }
    }
}