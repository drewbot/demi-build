/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

// Use `app.import` to add additional libraries to the generated
// output files.
//
// If you need to use different assets in different
// environments, specify an object as the first parameter. That
// object's keys should be the environment name and the values
// should be the asset to use in that environment.
//
// If the library that you are including contains AMD or ES6
// modules that you would like to import into your application
// please specify an object with the list of modules as keys
// along with the exports of each module as its value.

var app = new EmberApp({
  // 'ember-cli-bootstrap-sass': {
  //   'importBootstrapJS': true
  // }
});

module.exports = app.toTree();

// bootstrap
app.import('node_modules/ember-cli-bootstrap-sass/vendor/bootstrap-sass-offical/assets/javascripts/bootstrap.js');
app.import('node_modules/ember-cli-bootstrap-sass/vendor/bootstrap-sass-offical/assets/stylesheets/_bootstrap.scss');
app.import('node_modules/ember-cli-bootstrap-sass/vendor/bootstrap-sass-offical/assets/fonts/bootstrap/glyphicons-halflings-regular.eot', {	
  destDir: 'fonts'
});
app.import('node_modules/ember-cli-bootstrap-sass/vendor/bootstrap-sass-offical/assets/fonts/bootstrap/glyphicons-halflings-regular.svg', {	
  destDir: 'fonts'
});
app.import('node_modules/ember-cli-bootstrap-sass/vendor/bootstrap-sass-offical/assets/fonts/bootstrap/glyphicons-halflings-regular.ttf', {	
  destDir: 'fonts'
});
app.import('node_modules/ember-cli-bootstrap-sass/vendor/bootstrap-sass-offical/assets/fonts/bootstrap/glyphicons-halflings-regular.woff', {	
  destDir: 'fonts'
});
