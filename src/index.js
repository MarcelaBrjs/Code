const express = require('express');
const app = express();

require('dotenv').config()
const PORT = process.env.PORT;

const usersRouter = require('./routes/users');
app.use('/api/user', usersRouter);

app.listen(PORT, () => {
    console.log(`Servidor activo en el puerto ${PORT}`);
});