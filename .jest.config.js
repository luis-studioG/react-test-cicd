module.exports = {
  // other config options
  moduleNameMapper: {
    "^@testing-library/react$": "<rootDir>/node_modules/@testing-library/react",
    preset: "ts-jest",
    testEnvironment: "node",
    "\\.(svg)$": "<rootDir>/path/to/fileStub.js",
  },
};
