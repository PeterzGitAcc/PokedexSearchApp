module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  transform: {
    "^.+\\.vue$": "@vue/vue3-jest",
  },  moduleNameMapper: {
    '^axios$': require.resolve('axios'),
  },
  moduleFileExtensions: ['vue', 'js', 'json']
}
