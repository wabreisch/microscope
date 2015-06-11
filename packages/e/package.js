Package.describe({
  name: 'wabreisch:e',
  summary: "A pattern to display application errors to the user",
  version: '1.0.0',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use(['minimongo', 'mongo-livedata', 'templating'], 'client');
  api.addFiles(['e.js', 'errors_list.html', 'errors_list.js'], 'client');

  if (api.export)
    api.export('Errors');
});

// Package.onTest(function(api) {
//   api.use('tinytest');
//   api.use('wabreisch:e');
//   api.addFiles('e-tests.js');
// });


//  Package.describe({
//   name: "tmeasday:errors",
//   version: "1.0.0"
// });
// Package.onUse(function (api, where) {
//   api.versionsFrom('0.9.0');
//   api.use(['minimongo', 'mongo-livedata', 'templating'], 'client');
//   api.addFiles(['errors.js', 'errors_list.html', 'errors_list.js'], 'client');
// if (api.export) api.export('Errors');
// });