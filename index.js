const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const expressLayouts = require('express-ejs-layouts');

dotenv.config();

const connectDB = require('./config/db');
const { urlencoded } = require('body-parser');
connectDB();

var PORT = process.env.PORT || 4000;



app.use(cors());
app.use(express.json());
app.use(cookieParser());



app.listen(PORT, () => {
    console.log("Server started at port", PORT);
});
