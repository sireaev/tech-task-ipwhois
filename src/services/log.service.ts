import { Op } from 'sequelize';

import { LogModel } from 'interfaces/log.type';
import models from '../models';

import IPWhoisService from './ipwhois.service';
import CronService from './cron.service';

const { Log } = models;

const getOne = async (ip: string) => {
    let data = null;

    data = await Log.findOne({
        where: { ip },
    });

    if (!data) {
        const result = await IPWhoisService.getIP(ip);
        data = await create(_transformToLogModel(ip, result));
    }

    return data;
};

const create = async (log: Partial<LogModel>) => {
    const l = await Log.create(log, { raw: true });

    return l.get({ plain: true });
};

const deleteOne = async (ip: string) => {
    const l = await Log.destroy({ where: { ip }});

    return l;
};

const deleteMinutePassedLogs = async () => {
    const result: number = await Log.destroy(<any>{
        where: {
            createdAt: { [Op.lte]: new Date(Date.now() - 60 * 1000) },
        },
    });

    return result;
};

const _transformToLogModel = (ip: string, data: any): Partial<LogModel> => {
    return {
        ip,
        data,
    };
};

CronService.scheduleForMinute(deleteMinutePassedLogs);

export default {
    getOne,
    create,
    deleteOne,
};
