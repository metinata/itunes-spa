import redis from 'redis'
import hash from 'object-hash'

const redisClient = redis.createClient();

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