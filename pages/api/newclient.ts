// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { PrismaClient } from "@prisma/client";
import Airtable ,{Table} from "airtable";
import { Console } from "console";
import Cookies from "js-cookie";
// import jwt from "jwt-decode";
import jwt from "jsonwebtoken"
import type { NextApiRequest, NextApiResponse } from 'next'
var base = new Airtable({apiKey: 'patUBTpsx1dmiILA1.25ed609b6e39090d688f94b585381704eaaf318dfcfc02a3aae5a21f189a7a0d'}).base('appUGFHsf0FQduyTw');
type Data = {
  name: string
}
// PrismaClient
const prisma =new PrismaClient()
export default async function handler(req: NextApiRequest,res: NextApiResponse) {
// sendSuggestion()
try {
console.log(req.body)
const finder = await prisma.client.findFirst({where:{email:req.body.email}})
if(finder?.email == req.body.email) return res.status(301).json({error:"البريد الالكتروني مسجل لدينا في قاعدة البيانات"});
  const newclient = await prisma.client.create({data:{fullname:req.body.fullname,password:req.body.password,Cvnumber:req.body.cvnumber,email:req.body.email,
    phonenumber:req.body.phonenumber
  }})

const result =  await new Promise((resolve,reject)=>{
const update = base('السيرة الذاتية').update([
  {
    "id": req.body.id,
    "fields": {
      "العملاء":req.body.fullname
    }}])

   resolve(update)

 

   
  })
const sign =jwt.sign(newclient,"secret");  
    // Cookies.set("token",sign);
    // console.log(Cookies.get("token"))

// console.log(result)
  res.status(200).json(sign)  
} catch (error) {
  console.log(error)
  res.status(302).json({error:"connectivity error"})  

}

}

  // export base;