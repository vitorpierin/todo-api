import { Router, Request, Response } from 'express';

import * as TodoController from '../controllers/todo.controller';

const router = Router();
router.get('/', TodoController.home);

router.get('/todo', TodoController.all); //rota para pegar todos
router.post('/todo', TodoController.add);
router.get('/todo/:id/update', TodoController.update);
router.get('/todo/:id/remove', TodoController.remove);



export default router;