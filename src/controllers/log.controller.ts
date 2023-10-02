import { Request, Response } from 'express';
import routes from 'routes/public';
import asyncHandler from 'helpers/async.handler';
import LogService from 'services/log.service';
import responseBuilder from 'helpers/base.response';
// import { LogModel } from 'interfaces/log.type';
// import { ResponseModel } from 'interfaces/response.type';

routes.get(
    '/lookup/:ip',
    asyncHandler(async function getOne(
        req: Request,
        res: Response
    ): Promise<any> {
        const { ip } = req.params;
        const data = await LogService.getOne(<string>ip);
        const buildResponse = responseBuilder.baseResponse(data);

        if (!data) {
            return res
                .status(404)
                .json({ code: 404, message: 'No data found.' });
        }

        return res.status(200).json(buildResponse);
    })
);

routes.delete(
    '/lookup/:ip',
    asyncHandler(async function getOne(
        req: Request,
        res: Response
    ): Promise<any> {
        const { ip } = req.params;
        await LogService.deleteOne(<string>ip);

        return res.status(201).json();
    })
);
