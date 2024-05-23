const express = require("express");
const app = express();
const cors=require('cors')
const dotenv = require("dotenv");
const router = require('./auth'); // Import the router

dotenv.config({ path: './config.env' });
require('./conn');

//handling cors policy
const corsOptions={
    origin:'http://localhost:5173',
    methods:"GET,POST,PUT,DELETE,PATCH,HEAD",
    credentials:true,
}
app.use(cors(corsOptions));


app.use(express.json());




// Mount the router for specific paths
app.use(router)




app.listen(8000, () => {
    console.log("Server is running on port 8000");
});