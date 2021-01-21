module.exports = {
  rootDir: __dirname,
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
    "^api(.*)": "<rootDir>/src/api$1",
    "^components(.*)": "<rootDir>/src/components$1",
    "^utils(.*)": "<rootDir>/src/utils$1",
    "^hooks(.*)": "<rootDir>/src/hooks$1",
    "^~(.*)": "<rootDir>/src$1",
  },
  setupFilesAfterEnv: ["regenerator-runtime/runtime", "@testing-library/jest-dom/extend-expect"],
  collectCoverageFrom: ["**/src/**/*.ts", "**/src/**/*.tsx"],
};
