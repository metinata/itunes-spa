import express from 'express'
import * as controller from './controller'

const router = express.Router();

router
    .route('/lookup')
    .get(controller.lookup)

export default router