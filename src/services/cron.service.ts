import cron from 'node-cron';

const scheduleForMinute = (callback: Function) => {
    cron.schedule('* * * * *', () => {
        callback();
    });
};

export default {
    scheduleForMinute,
};
