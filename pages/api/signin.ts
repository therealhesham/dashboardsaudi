import mongoose from 'mongoose';
import type { NextApiRequest, NextApiResponse } from 'next'
// mongoose

// (async function name() {
 mongoose.connect("mongodb+srv://heshammoha231992:BozLnMORjollMgoC@cluster0.ewjihyo.mongodb.net/authentication").then(e=>console.log(e))

const schema = new mongoose.Schema({

    store :{type:"string",required:true}})
  const mYmodel = mongoose.model("users",schema)
const s = new mYmodel({store:"sss"})
// await s.save()

const MONGODB_URI = process.env.MONGODB_URI;

//@ts-ignore

let cached = global.mongoose;

if (!cached) {
  //@ts-ignore
  cached = global.mongoose = { conn: null, promise: null };
}



async function connect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };
    cached.promise = mongoose.connect("mongodb+srv://heshammoha231992:BozLnMORjollMgoC@cluster0.ewjihyo.mongodb.net/authentication", opts).then((mongoose) => {
      return mongoose;
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

async function disconnect() {
  await mongoose.disconnect();
}

const db = { connect, disconnect };
export default async function handler(
 
 
 
  req: NextApiRequest,
  res: NextApiResponse
) {
 const user =await mYmodel.findOne({u:req.body})
 if (!user){


 }

  // db.connect()
// console.log(db.connect())
res.json(user)





}