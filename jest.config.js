module.exports = {
    preset: '@vue/cli-plugin-unit-jest',
    transform: {
        '^.+\\.vue$': 'vue-jest',
    },
    moduleNameMapper: {
        '^Components/(.*)$': '<rootDir>/src/components/$1',
        '^Hooks/(.*)$': '<rootDir>/src/hooks/$1',
        '^Router/(.*)$': '<rootDir>/src/router/$1',
        '^Store/(.*)$': '<rootDir>/src/store/$1',
        '^Views/(.*)$': '<rootDir>/src/views/$1',
    },
};
