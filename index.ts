import { Elysia } from 'elysia';

import pino from 'pino';

const app = new Elysia();

const log = pino({
    transport:{
        target: "pino-pretty",
        options: {
            colorize: true,
        }
    }
});

app.onStart(() => {
    log.info("App Started");
});

app.listen(3000);
