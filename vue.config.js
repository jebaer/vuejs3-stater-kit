const fs = require('fs');

module.exports = {
    devServer: {
        port: 8080,
        /*
        // PROXIS SEND REQUEST TO OUTSIDE
        proxy: {
            '^/auth': {
                target: 'https://127.0.0.1:3001',
                pathRewrite: { '^/auth': '/api/' },
                changeOrigin: true,
                secure: false,
            },
        },
        */
        /*
        // ACTIVATES HTTPS NAVIGATION
        https: {
            key: fs.readFileSync('./certs/localhost-key.pem'),
            cert: fs.readFileSync('./certs/localhost.pem'),
            rejectUnauthorized: false,
        },
        hotOnly: true,
        */
    },
};
