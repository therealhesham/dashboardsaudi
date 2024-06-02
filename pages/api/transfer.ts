import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
export default async function handler(
 
 
 
  req: NextApiRequest,
  res: NextApiResponse
) {
try {
    const transferlist=await prisma.transfer.findMany();
    
    res.status(200).send(transferlist)

} catch (error) {
  console.log(error)
  res.status(301).send("transfer")

// res.send("error")  
}

}

