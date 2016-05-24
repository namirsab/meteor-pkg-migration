Package.describe({
    name: 'qlp:qlp-window-state',
    version: '0.0.1',
    // Brief, one-line summary of the package.
    summary: '',
    // URL to the Git repository containing the source code for this package.
    git: '',
    // By default, Meteor will default to using README.md for documentation.
    // To avoid submitting documentation, set this field to null.
    documentation: 'README.md'
});

Package.onUse(function (api) {
    api.versionsFrom('1.3.2.4');

    api.use([
        'ecmascript'
    ]);
    // Packages for Client
    api.use([
        'jquery',
        'reactive-var',
        'templating'
    ], 'client');

    api.addFiles('client/helpers.js', 'client');
    // Export the Global Symbol we've defined in client/WindowState.js
    // Now we export it with api.mainModule
    api.mainModule('client/WindowState.js', 'client');
});
