import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'
import jwt from "jsonwebtoken";
const prisma = new PrismaClient()


export default async function handler(
 
 
 
  req: NextApiRequest,
  res: NextApiResponse
) {
try {
  // await prisma..
console.log(req.headers.cookie)
  const createAdmin=await prisma.user.findFirst({where:{idnumber:Number(req.body.idnumber)}})
  
  if(createAdmin?.password != req.body.password) return res.status(301).send("خطأ في الرقم السري");
//@ts-ignore
const sign =jwt.sign({idnumber:createAdmin?.idnumber,pictureurl:createAdmin?.pictureurl,name:createAdmin?.username},"secret");  
  res.status(200).json(sign)

} catch (error) {
  console.log(error)
  // res.status(301).send("createAdmin")
res.status(301).json("خطأ في تسجيل الدخول , تأكد من صحة البيانات");
// res.send("error")  
}

}


