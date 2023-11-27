const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './src'
})

const customJestConfig = {
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
  roots: ['<rootDir>/src'],
  moduleNameMapper: {
    '^@components(.*)$': '<rootDir>/components/$1',
    '^@styles(.*)$': '<rootDir>/src/app/styles/$1',
    '^@utils(.*)$': '<rootDir>/app/utils/$1',
    '^@pages(.*)$': '<rootDir>/pages/$1',
    '^@context(.*)$': '<rootDir>/src/app/context/$1'
  },
  modulePaths: ['<rootDir>'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  setupFiles: ['./setupTests.js'],
  automock: false
}

module.exports = createJestConfig(customJestConfig)