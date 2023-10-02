import { Model } from 'sequelize';

export type LogModel = {
    id: string;
    ip: string;
    data: string;
};

export interface LogInstance extends Model<LogModel, Partial<LogModel>> {}
