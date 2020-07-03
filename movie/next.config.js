// reffer to https://github.com/zeit/next-plugins/tree/master/packages/next-sass
const webpack = require("webpack");
const withSass = require("@zeit/next-sass");
const withCSS = require("@zeit/next-css");

const isProd = process.env.NODE_ENV === "production";

module.exports = withSass({
  // ---- DISABLE/Enable NEXT's FIle System Routing ---
  useFileSystemPublicRoutes: false,
  //---- END ---

  // --- SASS START ---
  sassLoaderOptions: {
    includePaths: ["sass"]
  },
  // --- SASS END ---

  // --- NEXT CONFIG START ---
  publicRuntimeConfig: {
    API_URL: process.env.API_URL,
    IMG_URL: process.env.IMG_URL,
    API_KEY: process.env.API_KEY,
    ACCESS_TOCKEN: process.env.ACCESS_TOCKEN
  },
  // --- NEXT CONFIG END ---

  webpack: function(config) {
    config.module.rules.push({
      test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,

      use: {
        loader: "url-loader",
        options: {
          limit: 100000,
          name: "[name].[ext]"
        }
      }
    });
    return config;
  }
});


