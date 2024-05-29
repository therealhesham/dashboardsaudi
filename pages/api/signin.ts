import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
export default async function handler(
 
 
 
  req: NextApiRequest,
  res: NextApiResponse
) {
try {
  // await prisma..
  const createAdmin=await prisma.user.findFirst({where:{idnumber:req.body.idnumber}})
  if(createAdmin?.id != req.body.idnumber) return res.status(301).send("المسخدم غير مسجل");


  if(createAdmin?.password != req.body.password) return res.status(301).send("خطأ في الرقم السري");

  res.status(200).send("تم تسجيل الدخول")

} catch (error) {
  console.log(error)
  // res.status(301).send("createAdmin")
res.status(301).send("خطأ في تسجيل الدخول , تأكد من صحة البيانات");
// res.send("error")  
}

}


