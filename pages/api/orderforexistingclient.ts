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
try {

  const resultone =  await new Promise((resolve,reject)=>{
const create = base('العملاء').create([
  {
    "fields": {
      "رقم العميل": req.body.phonenumber,
      "اسم العميل": req.body.fullname,
      "مصدر العميل": [
        req.body.source
      ]
    }
  }])
 resolve(create)

   
  })

  const result =  await new Promise((resolve,reject)=>{
const update = base('السيرة الذاتية').update([
  {
    "id": req.body.id,
    "fields": {
      "العملاء":req.body.fullname,
      "حالة الحجز":req.body.status
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