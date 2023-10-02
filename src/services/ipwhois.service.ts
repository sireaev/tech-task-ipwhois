import http from 'http';

const getIP = async (ip: string) => {
    // Native implementation of a third-party call inside Node.js with Promise
    return new Promise((resolve, _) => {
        http.get(`http://ipwho.is/${ip}`, (res: any) => {
            let str = '';

            res.on('data', function (chunk: any) {
                str += chunk;
            });

            res.on('end', function () {
                console.log(str);
                resolve(str);
            });
        });
    });
};

export default {
    getIP,
};
