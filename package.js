Package.describe({
  name: 'cmoore:bootstrap3-navbar-active-links',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Adds an ".active" class to links in a bootstrap3 navbar that point to current path',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');
  api.addFiles('bootstrap3-navbar-active-links.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('cmoore:bootstrap3-navbar-active-links');
  api.addFiles('bootstrap3-navbar-active-links-tests.js');
});
