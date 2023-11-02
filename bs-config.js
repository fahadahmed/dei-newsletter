module.exports = {
    proxy: 'localhost:8000',
    files: ["**/*.css", "**/*.html", "**/*.js"],
    ignore: ["node_modules"],
    reloadDelay: 10,
    ui: false,
    notify: false,
    port: 8000,
};