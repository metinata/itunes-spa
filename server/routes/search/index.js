import express from 'express'
import * as controller from './controller'

const router = express.Router();

router
    .route('/search')
    .get(controller.search)

export default router