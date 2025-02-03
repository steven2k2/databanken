const fs = require('fs');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WebpackFavicons = require('webpack-favicons');
const siteConfig = require("./src/site-config");

// Function to check if a JSON file exists and read it
const loadPageData = (pageName) => {
  const filePath = path.resolve(__dirname, `./src/data/${pageName}.json`);

  try {
    if (fs.existsSync(filePath)) {
      console.log(`✅ Data file found: ${filePath}`);
      const jsonData = require(filePath);
      console.log(`📦 Loaded data for '${pageName}':`, jsonData);
      return jsonData;
    } else {
      console.warn(`⚠️ No data file found for '${pageName}'. Expected location: ${filePath}`);
      return null;
    }
  } catch (error) {
    console.error(`❌ Error loading data file for '${pageName}':`, error);
    return null;
  }
};

// Generate HTML files dynamically
const htmlPlugins = siteConfig.pages.map(({ name, title, description, slug, ogImage }) =>
  new HtmlWebpackPlugin({
    template: `./src/pages/${name}.hbs`,
    filename: slug,
    templateParameters: {
      site: siteConfig,
      page: { title, description, slug, ogImage },
      data: loadPageData(name) // Dynamically loads JSON if available
    }
  })
);

module.exports = {
  mode: 'development',

  resolve: {
    alias: {
      Assets: path.resolve(__dirname, 'src/assets'),
    },
  },

  entry: {
    main: './src/scripts/main.js',
  },

  output: {
    filename: 'assets/js/[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },

  devtool: 'source-map',

  devServer: {
    static: path.resolve(__dirname, 'dist'),
    port: 8085,
    open: true,
    hot: true,
    historyApiFallback: {
      rewrites: [{ from: /^\/404/, to: '/404.html' }],
    },
  },

  module: {
    rules: [
      {
        test: /\.hbs$/,
        loader: 'handlebars-loader',
        options: {
          partialDirs: path.resolve(__dirname, 'src/partials'),
        },
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|webp)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/images/[name][ext]',
        },
      },
    ],
  },

  plugins: [
    new WebpackFavicons({
      src: 'src/assets/images/lotus-flower.png',
      appName: 'Databanken',
      appleStatusBarStyle: 'default',
      path: 'assets/images',
      background: '#000',
      theme_color: '#000',
      icons: { android: true, appleIcon: true, appleStartup: true, favicons: true },
    }),

    ...htmlPlugins,

    new MiniCssExtractPlugin({
      filename: 'assets/css/styles.[contenthash].css',
    }),

    new CopyWebpackPlugin({
      patterns: [{ from: 'src/assets/images', to: 'assets/images' }],
    }),
  ],
};