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
console.log(req.body)
const finder = await prisma.client.findFirst({where:{email:req.body.email}})
if(finder?.email == req.body.email) return res.status(301).json({error:"البريد الالكتروني مسجل لدينا في قاعدة البيانات"});
try {
  //@ts-ignore
  if(req.body.password.length < 8) return res.status(301).json({error:"خطأ في الرقم السري"});
  
} catch (error) {
  return res.status(301).json({error:"خطأ في الرقم السري"});
}

const newclient = await prisma.client.create({data:{isUser:true,fullname:req.body.fullname,password:req.body.password,Cvnumber:req.body.cvnumber,email:req.body.email,
    phonenumber:req.body.phonenumber
  }})


  
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