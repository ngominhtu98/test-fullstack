//env
require('./env')


const express = require("express");
const mongoose = require("mongoose");
const config = require("./config/index");
const app = express();
const http = require("http").Server(app);
const port = process.env.PORT || 3000;

const dev = process.env.NODE_ENV !== "production";
const next = require("next");
const nextjs = next({ dev });
const handle = nextjs.getRequestHandler();

require('./config/express')(app);

require(config.PATH_MODELS)
    .map(modelName => `${config.PATH_MODELS}/${modelName}`)
    .forEach(require);


const connect = () =>
    new Promise((resolve, reject) => {
        mongoose.set("useCreateIndex", true);
        mongoose.set('useFindAndModify', false);
        mongoose.connect(config.DATABASE.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });
        const db = mongoose.connection;
        db.on("error", () => reject("Please install and start your mongodb"));
        db.once("open", resolve);
    });

const listen = () => {
    app.listen(port, err => {
        if (err) throw err;
        console.log(`> Ready on ${port}`);
    });
}

nextjs
    .prepare()
    .then(listen)
    .then(() => {
        connect()
            .then(() => {
                return true
            })
            .catch(err => {
                console.log('connect server.js ERROR', er);
                process.exit(0);
            })
    })
    .then(() => {

        app.get("*", (req, res) => {
            return handle(req, res);
        });

    })


process.on("uncaughtException", err => {
    console.log("uncaughtException server.js ERROR: ", err);
});

process.on("unhandledRejection", err => {
    console.log(err.message);
});