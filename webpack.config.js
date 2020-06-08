const path = require('path');
const JavaScriptObfuscate = require('webpack-obfuscator');

const version = '4.0.3';

module.exports = {
  mode: 'production',
  entry: {
    'index': './src/index.js',
    'app/app': './src/app/app.js',
    'utils/utils': './src/utils/utils.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: `[name]-${version}.obfuscate.js`
  },
  plugins: [
    new JavaScriptObfuscate({
      rotateStringArray: true
    }, [])
  ]
};