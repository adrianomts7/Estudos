import { Router } from 'express';
import userControllers from '../controllers/UserControllers';

const router = new Router();

router.post('/', userControllers.store);

export default router;

/*
index -> lista todos os usuarios -> GET
store/create -> cria um novo usuario -> POST
delete -> apaga um usuario -> DELETE
show -> mostra um usuario -> GET
update -> atualiza um usuario -> PATCH OU PUT
*/
