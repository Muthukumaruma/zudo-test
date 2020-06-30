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
    API_URL: process.env.API_URL || "https://api.themoviedb.org/3/",
    IMG_URL: process.env.IMG_URL || "https://image.tmdb.org/t/p/w500/",
    API_KEY: process.env.API_KEY || "0d1351921218f6d3a72ed8dc166061c9",
    ACCESS_TOCKEN: process.env.ACCESS_TOCKEN || "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZDEzNTE5MjEyMThmNmQzYTcyZWQ4ZGMxNjYwNjFjOSIsInN1YiI6IjVlZWVlN2U4ZDJiMjA5MDAzNGZmYjdkMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IakggtfpWM5z3o2Qa-8-FueVsPfjMrMRRgj4j6uuqOs"
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


