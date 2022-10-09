module.exports = {
    testEnvironment: 'jsdom',
    roots: ['<rootDir>/src'],
    transform: {
        '^.+\\.tsx?$': 'ts-jest'
    },
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
    moduleNameMapper: {
        '\\.css?$': 'identity-obj-proxy'
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node', 'css'],
    collectCoverage: true,
    collectCoverageFrom: [
        '**/*.{js,tsx,ts}',
        '!**/node_modules/**',
        '!**/*.stories.tsx',
        '!src/index.ts',
        '!src/components/index.ts'
    ]
};
