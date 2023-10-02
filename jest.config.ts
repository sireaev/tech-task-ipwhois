/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/en/configuration.html
 */

export default {
    clearMocks: true,
  
    // Indicates whether the coverage information should be collected while executing the test
    // collectCoverage: false,
  
    // An array of glob patterns indicating a set of files for which coverage information should be collected
    // collectCoverageFrom: undefined,
  
    // The directory where Jest should output its coverage files
    coverageDirectory: 'coverage',
  
    // An array of regexp pattern strings used to skip coverage collection
    coveragePathIgnorePatterns: [
      "/node_modules/"
    ],
  
    // Indicates which provider should be used to instrument code for coverage
    coverageProvider: 'v8',
  
    // A list of reporter names that Jest uses when writing coverage reports
    // coverageReporters: [
    //   "json",
    //   "text",
    //   "lcov",
    //   "clover"
    // ],
    moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'node'],
    roots: ['<rootDir>/src'],
    testEnvironment: 'node',
    testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[tj]s?(x)'],
  }