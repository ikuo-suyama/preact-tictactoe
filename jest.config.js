module.exports = {
    preset: 'ts-jest',
    moduleNameMapper: {
        "\\.(css|less)$": "identity-obj-proxy"
    },
    setupFilesAfterEnv: ["<rootDir>src/__tests__/setupTests.ts"],
};