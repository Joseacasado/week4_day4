module.exports = app => {

    // Base URLS
    app.use('/', require('./base.routes.js'))
    app.use('/tienda', require('./shop.routes.js'))
    app.use('/zona-cliente', require('./private-zone.routes.js'))
}