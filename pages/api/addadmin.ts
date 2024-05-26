import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
export default async function handler(
 
 
 
  req: NextApiRequest,
  res: NextApiResponse
) {

const createAdmin=await prisma.user.create({data:{admin:req.body.admin,password:req.body.password,pictureurl:req.body.picture,idnumber:req.body.idnumber,role:req.body.role,username:req.body.username}})


res.json(createAdmin)
}
