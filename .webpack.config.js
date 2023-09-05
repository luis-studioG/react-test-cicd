module.exports = {
  // other config options
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      './logo.svg$': path.resolve(__dirname, 'path/to/logo.svg'),
      './App.css$': path.resolve(__dirname, 'path/to/App.css'),
    },
  },
};