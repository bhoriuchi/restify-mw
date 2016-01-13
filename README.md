

# restify-mw
---

A collection of customized middleware for [`node-restify`](https://github.com/restify/node-restify)


## Documentation
---

### `restifymw.serveStatic`( `options` )
* `options` [`Object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) - hash of options.
  * `directory` [`String`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) - Local path to the file directory to serve from
  * [`default`] [`String`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) - default file to serve (i.e. index.html)
  * [`file`] [`String`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) - Specific file to serve
  * [`virtual`] [`String`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) - A virtual directory path. This allows you to serve the route `http://host/virtual/dir` from `/directory/dir` instead of the standard `/directory/virtual/dir` allowing folder locations to be more flexible
  
  
## Example

```js
var restifymw = require('restify-mw');

// restify initialization code...

// create a route for http://host/js/vendor/*
server.get(/\/js\/vendor\/?.*/, restifymw.serveStatic({
    directory: __dirname + '/bower_components',
    virtual: '/js/vendor'
}));

// files are all served out of /module_path/bower_components
// i.e. route http://host/js/vendor/angular/angular.min.js 
// serves file /module_path/bower_components/angular/angular.min.js

```




### Tools

Created with [Nodeclipse](https://github.com/Nodeclipse/nodeclipse-1)
 ([Eclipse Marketplace](http://marketplace.eclipse.org/content/nodeclipse), [site](http://www.nodeclipse.org))   

Nodeclipse is free open-source project that grows with your contributions.
