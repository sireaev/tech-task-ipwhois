import createError from 'http-errors';
import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import routes from 'routes';

const app = express();

app.use(helmet());
app.use(cors());
app.use(bodyParser.json({ limit: '100mb', type: 'application/json' }));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(routes);

app.use(function (req: Request, res: Response, next: NextFunction) {
    next(createError(404));
});

app.use(function (err: any, req: Request, res: Response, next: NextFunction) {
    res.locals.message = err?.message || 'Internal server error';
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    res.status(err?.status || 500);
    res.json({
        message: err.message,
        error: err.status || 500,
    });
});

export default app;
