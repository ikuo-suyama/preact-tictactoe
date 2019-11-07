module.exports = {
    // preset: 'ts-jest', 'jest-puppeteer',
    preset: 'ts-jest',
    moduleNameMapper: {
        "\\.(css|less)$": "identity-obj-proxy"
    },
    testEnvironment: 'node'
};