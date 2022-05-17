module.exports = {
  extends: 'airbnb',
  plugins: [
    'react',
    'jsx-a11y',
    'import',
    'jasmine',
  ],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'no-multiple-empty-lines': [2, { max: 2, maxEOF: 0, maxBOF: 0 }],
  },
  env: {
    jasmine: true,
  },
  globals: {
    fetch: true,
  },
};
