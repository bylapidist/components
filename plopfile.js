// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
module.exports = function(plop) {
    plop.setGenerator('package', {
        description: 'Create a new package',
        prompts: [
            {
                type: 'input',
                name: 'componentName',
                message: "What's it called? (e.g. ComponentName)"
            }
        ],
        actions: [
            {
                type: 'addMany',
                base: 'templates/package',
                destination: 'packages/{{kebabCase componentName}}',
                path: '{{componentName}}.spec.tsx',
                templateFiles: ['templates/**/*', 'templates/**/.*'],
                stripExtensions: ['hbs'],
                force: true
            }
        ]
    });
};
