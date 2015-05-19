Package.describe({
  name: 'mahmoudkm:meteorstrengthjs',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'A meteor implementation of the password strength meter library Strength.js',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/CreativeParts/meteor-strength.js',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  //JQuery required by Stength.js library, so let's load it...
  api.use('jquery@1.7.2', 'client');

  //Add Stength.js files....
  api.addFiles([
    'Strength.js/src/strength.js',
    'Strength.js/src/strength.css'
    ], ['client']);
  
  api.addFiles('meteorstrengthjs.js');
});

Package.onTest(function(api) {
  // api.use('tinytest', 'test-helpers');  
  api.use('tinytest');
  api.use('mahmoudkm:meteorstrengthjs');
  api.addFiles('meteorstrengthjs-tests.js');
});
