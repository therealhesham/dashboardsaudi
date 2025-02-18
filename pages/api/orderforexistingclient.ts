// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { PrismaClient } from "@prisma/client";
import Airtable ,{Table} from "airtable";
import { Console } from "console";
import Cookies from "js-cookie";
// import jwt from "jwt-decode";
import jwt from "jsonwebtoken"
import type { NextApiRequest, NextApiResponse } from 'next'
var base = new Airtable({apiKey: 'patovGWItwsDoXzng.84565b10c27835cf1ac38c9f9b64e14a42a6ac3b825728e3970dffa94292577c'}).base('app1mph1VMncBBJid');
// var baseFinder = new Airtable({apiKey: 'patovGWItwsDoXzng.84565b10c27835cf1ac38c9f9b64e14a42a6ac3b825728e3970dffa94292577c'}).base('app1mph1VMncBBJid');
var baseFinder = new Airtable({apiKey: 'patqpqm8yUGAdhSoj.b42530f3bb52b3073c8a30eb1507a54227cb17fdc0d8ce0368ee61a8acf1c66d'}).base('app1mph1VMncBBJid');

type Data = {
  name: string
}
// PrismaClient
const prisma =new PrismaClient()
export default async function handler(req: NextApiRequest,res: NextApiResponse) {
// sendSuggestion()
try {
  console.log(req.body.id)


const finderror =    baseFinder("السير الذاتية").find(req.body.id, function(err, record) {
    if (err) { console.error(err); return; }
    //@ts-ignore
    if(record?.fields["العملاء"] != null) return res.status(202).json("sign")  


    // console.log('Retrieved', record.id);
  //@ts-ignore
  })
  //@ts-ignore
//reject(finderror)
 
  const result =  await new Promise((resolve,reject)=>{
    // if(record?.fields["العملاء"] != null) return reject("error")  

const update = base('السير الذاتية').update([
  {
    id: req.body.id,
    "fields": {
      "العملاء":req.body.fullname,
      "حالة الحجز":"حجز جديد"
    }}])

   resolve(update)

 

   
  })

  res.status(200).json("sign")  
} catch (error) {
  console.log(error)
  res.status(302).json({error:"connectivity error"})  

}

}

  // export base;