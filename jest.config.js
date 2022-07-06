module.exports = {
    preset: 'ts-jest',
    transform: {
        '^.+\\.(t|j)sx?$': 'ts-jest',
    },
    collectCoverageFrom: [
        '<rootDir>/src/**/*.{ts,tsx}',
        '!<rootDir>/src/**/*.stories.*',
        '!<rootDir>/src/styles/**/*',
        '!<rootDir>/src/**/*.styled.{ts,tsx}',
    ],
    testRegex: '/__tests__/.*\\.(ts|tsx|js)$',
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect', '<rootDir>src/utils/setupTests.ts'],
    coveragePathIgnorePatterns: ['/node_modules/'],
    moduleNameMapper: {
        '^~(.*)$': '<rootDir>/src$1',
    },
};
