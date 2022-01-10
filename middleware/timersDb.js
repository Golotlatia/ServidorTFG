const { MongoClient } = require('mongodb');
const connectDb = require("../middleware/connectDb");



 url = process.env.MONGODB,
 client = new MongoClient(url);

const timersDb = (req, res, next) =>{

   connectDb.insertarDb();
    
    next();



}


module.exports = timersDb;