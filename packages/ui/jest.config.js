module.exports = {
  setupFiles: ['<rootDir>/__tests__/enzyme-setup.ts'],
  moduleFileExtensions: ['ts', 'tsx'],
  testRegex: '__tests__/.*\\.test\\.tsx?$',
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  }
};
