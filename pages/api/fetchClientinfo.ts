// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { PrismaClient } from "@prisma/client";
import Airtable ,{Table} from "airtable";
import { Console } from "console";
import Cookies from "js-cookie";
// import jwt from "jwt-decode";
import jwt from "jsonwebtoken"
import type { NextApiRequest, NextApiResponse } from 'next'
var base = new Airtable({apiKey: 'patovGWItwsDoXzng.84565b10c27835cf1ac38c9f9b64e14a42a6ac3b825728e3970dffa94292577c'}).base('app1mph1VMncBBJid');
type Data = {
  name: string
}
// PrismaClient
const prisma =new PrismaClient()
export default async function handler(req: NextApiRequest,res: NextApiResponse) {
// sendSuggestion()
try{
  //@ts-ignore
const arr =[];
  const result =  await new Promise((resolve,reject)=>{
const update = base('السير الذاتية').select({
    // Selecting the first 3 records in الاساسي:
    view: "الاساسي"
}).eachPage(function page(records, fetchNextPage) {
    // This function (`page`) will get called for each page of records.

    records.forEach(function(record) {
       //@ts-ignore
      if(record.get("م") == req.body.fullname) arr.push(record)
      // console.log('Retrieved', record.get('م'));
    });


}, function done(err) {
    if (err) { console.error(err); return; }
})
    // Cookies.set("token",sign);
    // console.log(Cookies.get("token"))

// console.log(result)
  //@ts-ignore

  res.status(200).json(arr)  
})} catch (error) {
  console.log(error)
  res.status(302).json({error:"connectivity error"})  

}

}

  // export base;