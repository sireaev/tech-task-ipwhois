import fs from 'fs';
import path from 'path';
import http from 'http';
import models from './models/_instance';
import app from './index';

const pathEnv = path.resolve('.env');

if (!fs.existsSync(pathEnv)) {
    throw new Error(
        'Missing env!!!\nCopy / Duplicate ".env.example" root directory to ".env"'
    );
}

/**
 * Module dependencies.
 */

// eslint-disable-next-line import/no-extraneous-dependencies
require('@babel/register')({ extensions: ['.js', '.ts'] });
const debug = require('debug')('tech-task-ipwhois:server');

/**
 * Initial Connection Database
 */
models.sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
        return models.sequelize.sync();
    })
    .then(() => {
        console.log('Tables are synced successfully!');
    })
    .catch((err: any) => {
        console.error('Unable to connect to the database:', err);
    });

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val: string) {
    const port = parseInt(val, 10);

    if (Number.isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
}

/**
 * Get port from environment and store in Express.
 */

const port = normalizePort(process.env.PORT || '8000');
app.set('port', port);

/**
 * Create HTTP server.
 */

const server = http.createServer(app);

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error: { syscall: string; code: any }) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    const bind = typeof port === 'string' ? `Pipe ${port}` : `Port ${port}`;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(`${bind} requires elevated privileges`);
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(`${bind} is already in use`);
            process.exit(1);
            break;
        default:
            throw error;
    }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
    const addr = server.address()!;
    const bind =
        typeof addr === 'string' ? `pipe ${addr}` : `port ${addr.port}`;
    console.log(`Listening on ${bind}`);
    debug(`Listening on ${bind}`);
}

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
