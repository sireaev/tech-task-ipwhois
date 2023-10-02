import express, { Request, Response, NextFunction } from 'express';
import publicRoute from 'routes/public';

const router = express.Router();

router.get('/', function (req: Request, res: Response, next: NextFunction) {
    return res.status(200).send('foobarbaz');
});

router.get(
    '/api/v1',
    function (req: Request, res: Response, next: NextFunction) {
        return res.status(403).json({ status: 403, message: 'Forbidden ' });
    }
);

router.use('/api/v1', publicRoute);

export default router;
