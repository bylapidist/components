module.exports = {
    testEnvironment: 'jsdom',
    roots: ['<rootDir>/src'],
    transform: {
        '^.+\\.tsx?$': 'ts-jest'
    },
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    collectCoverage: true,
    collectCoverageFrom: [
        '**/*.{js,tsx}',
        '!**/node_modules/**',
        '!**/*.stories.tsx'
    ]
};
