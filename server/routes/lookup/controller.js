import * as services from '../../services'
import { redisClient } from '../../caching'
import { cacheDuration } from '../../config'
import hash from 'object-hash'

const lookup = (req, res, next) => {
    services.lookup(req.query)
        .then(response => {
            redisClient.set(hash(req.query), JSON.stringify(response.data), 'EX', cacheDuration);
            res.json(response.data);
        })
        .catch(error => {
            res.json(error);
        });
};

export {
    lookup
}