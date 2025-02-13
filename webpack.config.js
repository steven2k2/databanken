import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import sitePages from './src/config/site-pages.js';
import siteInfo from './src/config/site-info.js';

// Fix __dirname for ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load stock data manually
const stockDataPath = path.resolve(__dirname, 'src/data/stock-data.json');
const stockData = JSON.parse(fs.readFileSync(stockDataPath, 'utf8'));

const ebayDataPath = path.resolve(__dirname, 'src/data/ebay-data.json');
const ebayData = JSON.parse(fs.readFileSync(ebayDataPath, 'utf8'));

// Generate multiple HTML pages, adding stock data only for stocklist
const htmlPlugins = sitePages.map(({ name, title, slug, description }) => {
  let extraData = {};

  if (name === "stocklist") {
    extraData.stock = stockData; // Only add stock data for stocklist.html
  }
  if (name === "ebay") {
    extraData.data = ebayData; // Only add stock data for stocklist.html
  }

  return new HtmlWebpackPlugin({
    template: `./src/templates/pages/${name}.hbs`,
    filename: slug,
    templateParameters: { title, description, ...siteInfo, ...extraData }
  });
});

export default {
  mode: process.env.NODE_ENV || 'development',
  entry: {
    main: './src/scripts/main.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].bundle.js',
    assetModuleFilename: 'assets/images/[name].[hash][ext]',
    clean: true
  },
  devtool: 'source-map',
  devServer: {
    static: './dist',
    open: true,
    liveReload: true // Ensures auto-reload when files change
  },
  optimization: {
    splitChunks: { chunks: 'all' }
  },
  module: {
    rules: [
      {
        test: /\.hbs$/,
        loader: 'handlebars-loader',
        options: { partialDirs: path.resolve(__dirname, 'src/templates/partials') }
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
        type: 'asset/resource',
        exclude: path.resolve(__dirname, 'src/images')
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin({ patterns: [{ from: 'src/images', to: 'images' }] }),
    ...htmlPlugins, // Dynamically inject HTML pages
    new MiniCssExtractPlugin({ filename: 'assets/css/[name].[contenthash].css' })
  ]
};