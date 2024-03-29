export const parameters = {
    options: {
        storySort: {
            order: ['Primitives', 'Typography', 'Inputs', 'Status', 'Utility']
        }
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        }
    }
}
