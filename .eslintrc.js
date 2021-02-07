module.exports = {
  extends: ['react-app', 'react-app/jest', 'prettier'],
  parserOptions: {
    parser: 'babel-eslint'
  },
  plugins: ['prettier'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'prettier/prettier': 'warn',
    semi: [2, 'always']
  }
};
