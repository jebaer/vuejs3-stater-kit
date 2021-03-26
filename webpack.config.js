const path = require('path');

module.exports = {
    resolve: {
        alias: {
            Components: path.resolve(__dirname, 'src/components'),
            Hooks: path.resolve(__dirname, 'src/hooks'),
            Router: path.resolve(__dirname, 'src/router'),
            Store: path.resolve(__dirname, 'src/store'),
            Views: path.resolve(__dirname, 'src/views'),
        },
    },
};
