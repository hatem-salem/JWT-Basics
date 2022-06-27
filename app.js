require('dotenv').config()
require('express-async-errors');

const express = require('express');
const app = express();

const mainRouter = require('./routes/main');

const notFound = require('./middleware/404')
const errorHandlerMiddleware = require('./middleware/errorHandlerMiddleware');


const port = process.env.PORT || 3000;





app.use(express.static('./public'))
app.use(express.json())

app.use('/api/v1/', mainRouter);

app.use(notFound);
app.use(errorHandlerMiddleware);

const start = async() => {
    try {
        await app.listen(port, console.log(`Server started on port ${port}`));
    } catch (error) {
        console.error(error);
    }
}

start();