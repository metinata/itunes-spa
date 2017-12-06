import redis from 'redis'
import hash from 'object-hash'

const redisClient = redis.createClient({
    host: process.env.REDIS ? process.env.REDIS : '127.0.0.1',
    port: 6379
})

const cache = (req, res, next) => {
    redisClient.get(hash(req.query), (error, result) => {
        result ?
            res.json(JSON.parse(result)) :
            next();
    });
};

export {
    redisClient,
    cache
}