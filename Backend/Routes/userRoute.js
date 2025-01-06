import express from 'express';
import { fetch,create,update,del, fetchID } from '../controller/userController.js';
const router=express.Router();

router.get('/fetch',fetch);

router.post('/create',create);

router.put('/update/:id',update);

router.delete('/delete/:id',del);

router.post('/fetchID/:id',fetchID);

export default router;