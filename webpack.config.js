const path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "dash.nprogress.js",
        path: path.resolve(__dirname, "dist"),
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
};
