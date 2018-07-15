const {google} = require('googleapis');

module.exports = (auth) => {

    const urlshortener = google.urlshortener({
        version: 'v1',
        auth: auth
    });

    async function get(shortened) {
        return await urlshortener.url.get({
            shortUrl: shortened
        });
    }

    return {
        get: get
    };
};