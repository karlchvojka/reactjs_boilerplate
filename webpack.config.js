// Framework Imports
const path = require('path')

// Plugin Library Imports
const HtmlWebPackPlugin = require('html-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')

module.exports = {
  mode: 'development',
  /**
   * Sets the entry point for the app post build.
   * Configured entry for the index.js file.
   */
  entry: {
    main: path.resolve(__dirname, './index.js')
  },

  /**
   * Sets where the files that are built are saved.
   */
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js'
  },

  target: 'web',

  /**
   * Dev server configuration
   */
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist')
    },
    open: true,
    hot: true,
    liveReload: true,
    historyApiFallback: true,
    port: process.env.PORT || 3000,
    allowedHosts: 'all'
  },
  resolve: {

    /**
     * Configuration of aliases.
     */
    alias: {
      public: path.resolve(__dirname, './public'),
      src: path.resolve(__dirname, './src'),
      globalAssets: path.resolve(__dirname, './src/globalAssets'),
      globalConfig: path.resolve(__dirname, './src/globalConfig'),
      layouts: path.resolve(__dirname, './src/components/layouts'),
      modules: path.resolve(__dirname, './src/components/modules')
    },

    extensions: ['.js', '.jsx', '.json']
  },
  module: {

    /**
     * Rules configuration for file type imports.
     */
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      }
    ]
  },

  /**
   * Plugin configurations.
   */
  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, './src/template.html'), // template file
      filename: 'index.html' // output file
    }),
    new ESLintPlugin()
  ]
}
