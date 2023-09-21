// const { MongoClient } = require("mongodb");
// const uri = "mongodb://0.0.0.0:27017";
// const database_name = "node-js";
// const client = new MongoClient(uri);
const { MongoClient } = require("mongodb");
const url = "mongodb://0.0.0.0:27017";
const connect=new MongoClient(url);
const db_name='node-js';
const connectDB=async()=>{
    let db=connect.db(db_name);
    const collection=await db.collection('node-tut');
    return collection;
}
//   client.connect();
// const db = client.db(database_name);
// const collection = db.collection("node-tut");
// return collection.find({}).toArray();
// getConnection().then((data) => {
//     let my_data = [];
//     data.forEach((val) => {
//       if(!val.name){
//         val.name='abc'+Math.random(0,5);
//       }
//       my_data.push({
//         id: val._id,
//         name: val.name,
//       });
//     });
//     console.log(my_data);
//     // console.log(val);
//   });
module.exports={
    connectDB
}