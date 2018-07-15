module.exports = async (auth) => {
    const urlShortener = require('../../../apis/urlshortener/v1/index')(auth);

    console.log('Testing urlshortener/v1...');

    try {
        const lengthened = await urlShortener.get('http://goo.gl/xKbRu3');
        console.log('Url Lengthening Works, lengthened url: ' + lengthened.data.longUrl);
    } catch (err) {
        console.error('Url lengthening failed:');
        console.error(err);
    }


};