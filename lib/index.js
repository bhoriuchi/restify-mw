/**
 * Custom Middleware for node-restify
 * Many of the custom middleware is existing middlware tha thas been modified
 * 
 * @author Branden Horiuchi <bhoriuchi@gmail.com>
 * @license MIT
 * 
 */
module.exports = {
	type        : 'restify-mw',
	version     : '0.0.1',
	serveStatic : require('./serveStatic')
};