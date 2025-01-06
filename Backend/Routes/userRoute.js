import express from 'express';
import { fetch,create,update,del, fetchID } from '../controller/userController.js';
const router=express.Router();

router.get('/fetch',fetch);

<<<<<<< HEAD
router.post('/create',create);
=======
router.get('/create',create);
>>>>>>> cbe5dac51dfd0c76d4aab55bdbe13f42e7f20d55

router.put('/update/:id',update);

router.delete('/delete/:id',del);

router.post('/fetchID/:id',fetchID);

export default router;