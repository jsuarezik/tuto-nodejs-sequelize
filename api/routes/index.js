import EnterpriseRoutes from './EnterpriseRoutes'
import {Router} from 'express'

let router =  Router()

router.use('/enterprises', EnterpriseRoutes)

export default router;