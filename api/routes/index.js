import EnterpriseRoutes from './EnterpriseRoutes'
import AuthController from '../controllers/AuthController'
import {Router} from 'express'

let router =  Router()

router.use('/enterprises', EnterpriseRoutes)
router.post('/auth/login', AuthController.login )

export default router;