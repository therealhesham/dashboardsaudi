import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
export default async function handler(
 
 
 
  req: NextApiRequest,
  res: NextApiResponse
) {
try {
  const {    client,
mobilenumber,
    nationalidnumber,
passportnumber,
homemaid,
nationality,
kingdomentrydate,
daydate,
workduration,
newclientname,
newclientmobilenumber,
newclientnationalidnumber,
newclientcity,
experimentstart,
experimentend,
dealcost,
paid,
restofpaid,
experimentresult,
accomaditionnumber,

marketeername,
notes
}=req.body;
  // await prisma..
  console.log(req.body)
  const transfer=await prisma.transfer.create({data:{ client,
mobilenumber,
    nationalidnumber,
passportnumber,
homemaid,
nationality,
kingdomentrydate,
daydate,
workduration,
newclientname,
newclientmobilenumber,
newclientnationalidnumber,
newclientcity,
experimentstart,
experimentend,
dealcost,
paid,
restofpaid,
experimentresult,
accomaditionnumber,

marketeername,
notes}})

  res.status(200).send(transfer)

} catch (error) {
  console.log(error)
  res.status(301).send("error")

// res.send("error")  
}

}


