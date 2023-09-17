const express = require('express')
const mongoose = require('mongoose')
const connectToDb = require('./config/connectToDb')
const { errorHandler, notFound } = require('./middlewares/error.js')
const cors = require('cors');
require('dotenv').config()


//Init App
const app = express()

app.use(cors());
app.use(express.json())

connectToDb()

//middleware

//Routes
const categoriesRoutes = require('./routes/categories');
const productsRoutes = require('./routes/products');
const usersRoutes = require('./routes/user/users');
const ordersRoutes = require('./routes/orders');

const api = process.env.API_URL;
const port = process.env.PORT;

app.use(`${api}/categories`, categoriesRoutes);
app.use(`${api}/products`, productsRoutes);
app.use(`${api}/orders`, ordersRoutes);


//User
app.use(`${api}/auth/`, require('./routes/authUserRoute'))
app.use(`${api}/users/`, require('./routes/user/users'))
app.use('/api/users/password/', require('./routes/user/users'))

//admin
app.use(`${api}/authAdmin/`, require('./routes/authAdminRoute'))
app.use(`${api}/admin/`, require('./routes/admin/admin'))
app.use(`${api}/admin/password/`, require('./routes/admin/passwordRoute'))


//Server
app.listen(port, () => {
    console.log(`server is running ${port}`);
});
//
