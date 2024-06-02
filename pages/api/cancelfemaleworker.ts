import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
export default async function handler(
 
 
 
  req: NextApiRequest,
  res: NextApiResponse
) {
try {
  //  console.log("deleter",)
  const deletefemaleworker=await prisma.femalWorker.delete({where:{id:req.body.id}})
  res.status(200).send(req.body.id)

} catch (error) {
  console.log(error)
  res.status(301).send("deletefemaleworker")

// res.send("error")  
}

}

