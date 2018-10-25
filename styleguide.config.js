const path = require('path');

module.exports = {
    title: 'React Component',
    serverPort: 8080,
    styleguideDir: 'docs/',
    webpackConfig: require('./webpack.config.js'),
    components: ['src/**/*.jsx'],
    ribbon: {
        url: 'https://github.com/trendmicro-frontend/react-component',
        text: 'Fork me on GitHub'
    },
    require: [
        '@babel/polyfill',
        path.join(__dirname, 'node_modules/trendmicro-ui/dist/css/trendmicro-ui.css'),
    ],
    theme: {
        maxWidth: 1280
    }
};
