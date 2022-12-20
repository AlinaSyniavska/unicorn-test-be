module.exports = {
    PORT: process.env.PORT || 5001,
    NODE_ENV: process.env.NODE_ENV,
    MONGO_URL: process.env.MONGO_URL || 'mongodb://localhost:27017/test',
    BEARER_TOKEN: process.env.ACCESS_TOKEN || 'access_token',
    AUTHORIZATION: process.env.AUTHORIZATION,
}

