/** @type {import("prettier").Config} */
module.exports = {
  plugins: [require.resolve('prettier-plugin-tailwindcss')],
  printWidth: 100,
  tabWidth: 2,
  singleQuote: true,
  semi: true,
  endOfLine: 'crlf',
};
