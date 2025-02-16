const express = require('express')
const dotenv=require('dotenv')
const { MongoClient } = require('mongodb');
dotenv.config()
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const cors = require('cors')
app.use(bodyParser.json())
app.use(cors())
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
 client.connect();

// Database Name
const dbName = 'PassOP';

//get all the passwords
app.get('/', async(req, res) => {
    const db = client.db(dbName);
    const collection = db.collection('Passwords');
    const findResult = await collection.find({}).toArray();
    
  res.json(findResult)
})
//save a password
app.post('/', async(req, res) => {
    const password = req.body
    const db = client.db(dbName);
    const collection = db.collection('Passwords');
    const findResult = await collection.insertOne(password)
    
  res.send({sucess:"true",result: findResult})
})
//Delete a password by id
app.delete('/', async(req, res) => {
    const password = req.body
    const db = client.db(dbName);
    const collection = db.collection('Passwords');
    const findResult = await collection.deleteOne(password)
    
  res.send({sucess:"true",result: findResult})
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})