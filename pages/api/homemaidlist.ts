import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
export default async function handler(
 
 
 
  req: NextApiRequest,
  res: NextApiResponse
) {
try {
    const femaleworkerlist=await prisma.homeMaid.findMany();
  res.status(200).send(femaleworkerlist)

} catch (error) {
  console.log(error)
  res.status(301).send("homeMaid")

// res.send("error")  
}

}

