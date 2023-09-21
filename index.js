const express = require("express");
const { connectDB } = require("./connection/connection");
const { router } = require("./routes");
const { ObjectId } = require("mongodb");
const app = express();
// Connect to the MongoDB server
const getData = async () => {
  let data = connectDB();
  data = data.find().toArray();
  data = await data;
  console.log(data);
  // return data;
  // data.then((val)=>{
  //   console.log(val);
  // })
};
// console.log(getData());
// getData();
//  insert data
const insertData = async () => {
  let data_ii = await connectDB();
  data_ii = await data_ii.insertMany([
    {
      name: "sergio",
      father_name: "abc",
      age: Math.round(0, 10),
    },
    {
      name: "sergio22",
      father_name: "abc22",
      age: Math.round(0, 10),
    },
  ]);
  console.log(data_ii);
};
// insertData();
// update Data
let updateData = async () => {
  const data = await connectDB();
  const set={name: "Ahsan Jawed"};
  let updated = await data.updateMany(
    {
      _id:new ObjectId('650c36b75ea3fb073ea87742'),
    },
    // {
    //   $set:{name: "Ahsan Jawed"}
    // }
    {
      $set:{...set}
    }

  );
  console.log(updated);
};
// updateData();
//  delete data
const deleteData=async()=>{
  const data=await connectDB();
  let filterData={
    _id:new ObjectId('650c36b75ea3fb073ea87742')
  };
  const deleted_data=await data.deleteMany(filterData);
  console.log(deleted_data);
}
deleteData();
app.use("/api", router);
app.listen(4000);

// CallStack
// Node API
// CallBack Queue
