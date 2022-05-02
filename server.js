
const dotenv = require('dotenv');
dotenv.config()
const app = require('./app');



app.listen((process.env.SERVER_HOST, process.env.SERVER_PORT),()=>{
  console.log("SERVER CONNECTED")
})

