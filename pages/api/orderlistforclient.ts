 //@ts-nocheck
//@ts-ignore
import Airtable ,{Table} from "airtable";

import { Console } from "console";
import Cookies from "js-cookie";
import type { NextApiRequest, NextApiResponse } from 'next'
// import { Jwt } from "jsonwebtoken";
import jwt from "jsonwebtoken"
var base = new Airtable({apiKey: 'patqpqm8yUGAdhSoj.b42530f3bb52b3073c8a30eb1507a54227cb17fdc0d8ce0368ee61a8acf1c66d'}).base('app1mph1VMncBBJid');

// var base = new Airtable({apiKey: 'patXrez1aIa2i3whF.410e92b1b07ab85712cd0722ad462964185aecd969949bde6e36295f7a2e8fc2'}).base('appUGFHsf0FQduyTw');

type Data = {
  name: string
}
//@ts-nocheck
//@ts-ignore
const arr = [];
export default async function handler(req: NextApiRequest,res: NextApiResponse) {
  const token = req.cookies.token;
  //@ts-nocheck
  //@ts-ignore
  const verify= jwt.verify(token,'secret');
  if (verify.fullname == undefined) return  res.status(301).json("error")
console.log(verify)
  const result =  await new Promise((resolve,reject)=>{


    base('السير الذاتية').select({
      view: "الاساسي"
    }).eachPage(function page(records, fetchNextPage) {
       

records.forEach(function(record,s) {
// console.log(record)
 
// console.log(s)


  if (record.fields["العملاء"] == verify.fullname) arr.push(record);
            
            
        });
     //@ts-nocheck
//@ts-ignore
 resolve(arr)       
    }, function done(err) {
        if (err) { console.error(err); return; }
    });

 
})
// console.log()
  res.status(200).json(result)
}

  // export base;