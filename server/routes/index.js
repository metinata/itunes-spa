import express from 'express'
import search from './search'
import lookup from './lookup'

const router = express.Router();

router
    .use(search)
    .use(lookup);

export default router