import express from 'express';
import { FloorController } from './floor.controller';
const router = express.Router();

router.post('/create-floor', FloorController.createFloor);

export const FloorRoutes = router;
