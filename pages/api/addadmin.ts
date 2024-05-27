import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
export default async function handler(
 
 
 
  req: NextApiRequest,
  res: NextApiResponse
) {

const createAdmin=await prisma.user.create({data:{ repeatpassword:req.body.password,admin:req.body.admin,password:req.body.password,pictureurl:req.body.pictureurl,idnumber:Number(req.body.idnumber),role:req.body.role,username:req.body.username}})
// createAdmin
console.log(createAdmin)
res.json(createAdmin)
}
