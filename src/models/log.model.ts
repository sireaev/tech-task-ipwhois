import { DataTypes } from 'sequelize';
import { LogInstance } from 'interfaces/log.type';
import db from './_instance';

const Log = db.sequelize.define<LogInstance>('Logs', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    ip: {
        type: DataTypes.STRING(40),
    },
    data: {
        type: DataTypes.TEXT,
    },
});

export default Log;
