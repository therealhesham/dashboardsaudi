import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
export default async function handler(
 
 
 
  req: NextApiRequest,
  res: NextApiResponse
) {
try {
    const maleworkerlist=await prisma.maleWorker.findMany();
  res.status(200).send(maleworkerlist)

} catch (error) {
  console.log(error)
  res.status(301).send("maleworkerlist")

// res.send("error")  
}

}

