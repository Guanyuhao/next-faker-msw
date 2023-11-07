/** @type {import('next').NextConfig} */

const webpack = require("webpack")

const nextConfig = {
    webpack: (config) => {
        config.plugins.push(
          new webpack.DefinePlugin({
            "process.env.MOCK_API": JSON.stringify(process.env.NEXT_PUBLIC_MOCK_API),
          })
        );
    
        return config;
    },
}

module.exports = nextConfig
