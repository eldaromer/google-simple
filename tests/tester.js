const urlshortener_v1 = require('./urlshortener/v1/test');

require('../auth')((auth) => {
    test(auth);
});

async function test(auth) {
    urlshortener_v1(auth);
}