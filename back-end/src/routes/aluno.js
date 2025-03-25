import { Router } from 'express';
import alunoController from '../controllers/AlunoController';

import loginRequired from '../middlewares/loginRequired';

const router = Router();

router.get('/', alunoController.index);
router.post('/', alunoController.store);
router.put('/:email', loginRequired, alunoController.update);
router.get('/:email', loginRequired, alunoController.show);
router.delete('/:email', loginRequired, alunoController.delete);

export default router;
