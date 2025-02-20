import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import CopyWebpackPlugin from 'copy-webpack-plugin'
import WebpackFavicons from 'webpack-favicons'
import sitePages from './src/config/site-pages.js'
import siteInfo from './src/config/site-info.js'

const options = {
  day: 'numeric',
  month: 'short',
  hour: '2-digit',
  minute: '2-digit',
  hour12: true
}
const lastModified = new Date().toLocaleDateString('en-GB', options).replace(',', '') // Removes unnecessary comma; // "16 Feb 2025"

// Fix __dirname for ESM
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Load stock data manually
const stockDataPath = path.resolve(__dirname, 'src/data/stock-data.json')
let stockData = {}
try {
  stockData = JSON.parse(fs.readFileSync(stockDataPath, 'utf8'))
} catch (error) {
  console.warn(`Warning: Failed to load ${stockDataPath}`, error)
}

const ebayDataPath = path.resolve(__dirname, 'src/data/ebay-data.json')
const ebayData = JSON.parse(fs.readFileSync(ebayDataPath, 'utf8'))

const laptopDataPath = path.resolve(__dirname, 'src/data/laptops.json')
const laptopData = JSON.parse(fs.readFileSync(laptopDataPath, 'utf8'))

// Generate multiple HTML pages, adding stock data only for stocklist
const htmlPlugins = sitePages.map(({ name, title, slug, description }) => {
  const extraData = {}

  if (name === 'stocklist') {
    extraData.stock = stockData // Only add stock data for stocklist.html
  }
  if (name === 'shop-desktops') {
    extraData.stock = stockData
  }
  if (name === 'shop-laptops') {
    extraData.stock = laptopData
  }
  if (name === 'ebay') {
    extraData.data = ebayData //
  }

  return new HtmlWebpackPlugin({
    template: `./src/templates/pages/${name}.hbs`,
    filename: slug,
    templateParameters: { title, description, lastModified, ...siteInfo, ...extraData }
  })
})

export default {
  mode: process.env.NODE_ENV || 'development',
  entry: {
    main: './src/scripts/main.js'
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
        options: {
          helperDirs: path.resolve(__dirname, 'src/helpers'), // Register custom helpers
          precompileOptions: {
            knownHelpersOnly: false
          },
          partialDirs: path.resolve(__dirname, 'src/templates/partials')
        }
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
    new WebpackFavicons({
      src: 'src/images/recycle.png',
      appName: 'Databanken',
      appleStatusBarStyle: 'default',
      path: 'assets/images',
      background: '#fff',
      theme_color: '#fff',
      icons: { android: true, appleIcon: true, appleStartup: true, favicons: true }
    }),

    new CopyWebpackPlugin({
      patterns: [
        { from: 'src/images', to: 'images' },
        { from: 'src/docs', to: 'docs' }
      ]
    }),

    ...htmlPlugins, // Dynamically inject HTML pages
    new MiniCssExtractPlugin({ filename: 'assets/css/[name].[contenthash].css' })

  ]
}
