export default {
    dev: {
        '/api': {
            target: 'https://museum.hjananking.com',
            changeOrigin: true,
            rewrite: path => path.replace(/^\/admin-api/, '')
        },
        '/data/dev/': {
            target: 'https://museum.hjananking.com',
            changeOrigin: true
        }
    }
};
