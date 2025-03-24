import { Router } from 'express';
import userControllers from '../controllers/UserControllers';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// Não deveria existir
router.get('/', loginRequired, userControllers.index);
router.get('/:email', userControllers.show);

router.post('/', userControllers.store);
router.put('/', loginRequired, userControllers.update);
router.delete('/', loginRequired, userControllers.delete);

export default router;

/*
index -> lista todos os usuarios -> GET
store/create -> cria um novo usuario -> POST
delete -> apaga um usuario -> DELETE
show -> mostra um usuario -> GET
update -> atualiza um usuario -> PATCH OU PUT
*/
