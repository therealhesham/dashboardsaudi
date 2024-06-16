//@ts-nocheck
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import Airtable ,{Table} from "airtable";

import { Console } from "console";
import type { NextApiRequest, NextApiResponse } from 'next'
import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient()
export default async function handler(req: NextApiRequest,res: NextApiResponse) {
try {
   const result =  await prisma.user.update({where:{id:req.body.id},data:{...req.body}})
  res.status(200).json(result)
} catch (error) {
  console.log(error)
  res.status(301).json("error")
  
}


}

  // export base;