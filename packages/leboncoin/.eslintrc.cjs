module.exports = {
  extends: ['../../.eslintrc.yml'],
  ignorePatterns: ['vite.config.ts', '!**/*'],
  parserOptions: {
    ecmaVersion: 2022,
    ecmaFeatures: {
      jsx: true,
    },
    project: 'tsconfig.json',
    sourceType: 'module',
    tsconfigRootDir: __dirname,
  },
};
