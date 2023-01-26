module.exports = {
  extends: ['@nuxt/eslint-config'],
  rules: {
    'vue/require-default-prop': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
  }
}
