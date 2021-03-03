import * as express from 'express'
import {AuthRoutes} from './auth.routes'

const router = express.Router()
export let Routes = AuthRoutes(router);

