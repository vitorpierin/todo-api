import { Router, Request, Response } from 'express';

import * as TodoController from '../controllers/todo.controller';

const router = Router();
router.get('/', TodoController.home);

router.get('/todo', TodoController.all); //rota para pegar todos
router.post('/todo', TodoController.add);
router.put('/todo/:id', TodoController.update);
router.delete('/todo/:id', TodoController.remove);

export default router;