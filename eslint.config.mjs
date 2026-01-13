import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,

  // Enable Prettier integration
  {
    extends: ['plugin:prettier/recommended'],
    plugins: ['prettier'],
    rules: {
      'prettier/prettier': [
        'error',
        {
          semi: true,
          singleQuote: true,
          trailingComma: 'all',
          printWidth: 100,
          tabWidth: 2,
          bracketSpacing: true,
          arrowParens: 'always',
        },
      ],
    },
  },

  // Override default ignores of eslint-config-next
  globalIgnores(['.next/**', 'out/**', 'build/**', 'next-env.d.ts']),
]);

export default eslintConfig;
