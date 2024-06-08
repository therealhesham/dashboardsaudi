import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
export default async function handler(
 
 
 
  req: NextApiRequest,
  res: NextApiResponse
) {
try {
  const {  clientname,
clientnameinenglishlanguage ,
    internalmusanedContract,
nationalidnumber,
contacntnumber,
passportnumber,
kingdomentrydate,
daydate,
workduration,
cost,
homemaidnumber,
notes

}=req.body;

  // await prisma..
  console.log(req.body)
  const createfemaleworker=await prisma.homeMaid.create({data:{ clientname,
clientnameinenglishlanguage ,
    internalmusanedContract,
nationalidnumber,
contacntnumber,
passportnumber,
kingdomentrydate,
daydate,
workduration,
cost,
homemaidnumber,
notes}})

  res.status(200).send(createfemaleworker)

} catch (error) {
  console.log(error)
  res.status(301).send("error")

// res.send("error")  
}

}


