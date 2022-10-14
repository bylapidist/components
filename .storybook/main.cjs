module.exports = {
  framework: '@storybook/react-vite',
  stories: [
      '../src/**/*.stories.mdx',
      '../src/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: [
      '@storybook/addon-links',
      '@storybook/addon-backgrounds',
      '@storybook/addon-controls',
      '@storybook/addon-highlight',
      '@storybook/addon-measure',
      '@storybook/addon-outline',
      '@storybook/addon-toolbars',
      '@storybook/addon-viewport'
  ]
};
