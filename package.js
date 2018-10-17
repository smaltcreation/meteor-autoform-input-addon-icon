Package.describe({
    name: 'smaltcreation:autoform-input-addon-icon',
    version: '1.0.0',
    summary: 'Input with bootstrap addon and custom icon for autoform'
});

Package.onUse(function(api) {
    api.versionsFrom('1.1.0.2');

    // Packages
    api.use([
        'underscore',
        'templating',
        'aldeed:autoform'
    ], 'client');

    // Files
    api.addFiles([
        'autoform-intl-tel-input.html',
        'autoform-intl-tel-input.js'
    ], 'client');
});
