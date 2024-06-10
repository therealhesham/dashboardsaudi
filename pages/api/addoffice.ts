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

const result =  await new Promise((resolve,reject)=>{
const update = base('المكاتب الخارجية').create([
  {

    "fields": {
     "External office - المكتب الخارجي": req.body.name,
      // "Status": req.body.country,
        "الدولة":[req.body.country]
    }}])

   resolve(update)

 

   
  })

// console.log(result)
  res.status(200).json(result)  
} catch (error) {
  console.log(error)
  res.status(302).json({error:"connectivity error"})  

}

}

  // export base;