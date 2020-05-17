import { Router } from 'express'
import EnterpriseController from '../controllers/EnterpriseController'
import JWTVerify from '../middlewares/JWTAuth'
let router = Router();

router.get('/', EnterpriseController.all);
router.get('/:id', JWTVerify, EnterpriseController.get)
router.post('/', (req, res) => { res.send ("Under construction")});
router.put('/:id', () => {})
router.delete('/:id', () => {})

export default router;