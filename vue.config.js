module.exports = {
    publicPath: 'pwo_calendar',
    pluginOptions: {
        i18n: {
            locale: 'en',
            fallbackLocale: 'en',
            localeDir: 'locales',
            enableInSFC: true,
        },
    },
    lintOnSave: true,
    transpileDependencies: [
        'vuetify',
    ],
};