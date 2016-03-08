Package.describe({
    name: 'maxencecornet:audio-recorder',
    version: '0.0.1',
    // Brief, one-line summary of the package.
    summary: 'Record audio input from the user microphone, export to .wav or ArrayBuffer',
    // URL to the Git repository containing the source code for this package.
    git: 'https://github.com/maxenceC/meteor-audio-recorder',
    // By default, Meteor will default to using README.md for documentation.
    // To avoid submitting documentation, set this field to null.
    documentation: 'README.md'
});

Package.onUse(function (api) {
    api.versionsFrom('1.2.1');
    api.use(['ecmascript', 'check']);

    api.addFiles(['lib/client/compatibility/recorder.js', 'lib/client/audio-recorder.js'], ['client']);
    api.export('AudioRecorder', 'client');
});

Package.onTest(function (api) {
    api.use('ecmascript');
    api.use('tinytest');
    api.use('maxencecornet:audio-recorder');
});
