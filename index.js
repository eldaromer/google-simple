const auth = require('./auth')();
const urlShortener = require('./apis/urlshortener/v1/index')(auth);

