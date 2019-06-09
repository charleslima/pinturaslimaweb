import config from './gulp.config';
import TerserPlugin from 'terser-webpack-plugin';

const webpackConfig = {
  mode: 'production',
  target: 'web',
  entry: {
    index: `${config.src.js}/index.js`
  },
  output: {
    filename: '[name].js',
    path: `${__dirname}/${config.dist.js}`
  },
  node: {
    __dirname: false
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        extractComments: true
      })
    ]
  },
  performance: {
    hints: false
  }
};

export default webpackConfig;
