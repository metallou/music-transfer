const TerserPlugin = require('terser-webpack-plugin');
const path         = require('path');

module.exports = {
  entry: {
    "spotify-unlike": path.resolve(__dirname, 'src/spotify-unlike.entry.ts'),
    "youtube-like": path.resolve(__dirname, 'src/youtube-like.entry.ts'),
    "youtube-remove": path.resolve(__dirname, 'src/youtube-remove.entry.ts')
  },
  output: {
    chunkFilename: '[name].js',
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          format: {
            comments: false,
          },
        },
        extractComments: false,
      }),
    ],
  },
};
