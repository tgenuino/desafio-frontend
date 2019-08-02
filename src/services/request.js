require('dotenv').config()
var OAuth = require('oauth');
var header = {
    "X-Yahoo-App-Id": process.env.REACT_APP_API_APP_ID
};
var request = new OAuth.OAuth(
    null,
    null,
    process.env.REACT_APP_API_CONSUMER_KEY,
    process.env.REACT_APP_API_CONSUMER_SECRET,
    '1.0',
    null,
    'HMAC-SHA1',
    null,
    header
);

module.exports = request;