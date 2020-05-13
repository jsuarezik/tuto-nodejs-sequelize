import { Router } from 'express'
import EnterpriseController from '../controllers/EnterpriseController'

let router = Router();

router.get('/', EnterpriseController.all);
router.get('/:id', EnterpriseController.get)
router.post('/', () => {})
router.put('/:id', () => {})
router.delete('/:id', () => {})

export default router;