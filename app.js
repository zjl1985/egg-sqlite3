'use strict';
const SQLite3 = require('sqlite3').verbose();
module.exports = app => {
    app.addSingleton('sqlite3', createSqlite3);
};

async function createSqlite3(config, app) {
    app.logger.info(`sqlite3 config: ${config}`);
    const client = await connectDataBase(config.file);
    app.logger.info('sqlite3 connected!');
    return client;
}

function connectDataBase(file) {
    return new Promise((resolve, reject) => {
        const db = new SQLite3.Database(file, function (err) {
            if (err) reject(new Error(err));
            resolve(db);
        });
    });
}