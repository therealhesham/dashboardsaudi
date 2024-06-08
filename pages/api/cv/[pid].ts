// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import Airtable ,{Table} from "airtable";

import { Console } from "console";
import type { NextApiRequest, NextApiResponse } from 'next'
var base = new Airtable({apiKey: 'patXrez1aIa2i3whF.410e92b1b07ab85712cd0722ad462964185aecd969949bde6e36295f7a2e8fc2'}).base('appUGFHsf0FQduyTw');

// var base = new Airtable({apiKey: 'patXrez1aIa2i3whF.410e92b1b07ab85712cd0722ad462964185aecd969949bde6e36295f7a2e8fc2'}).base('appUGFHsf0FQduyTw');
type Data = {
  name: string
}

export default async function handler(req: NextApiRequest,res: NextApiResponse) {
  console.log(req.query)
  console.log(req.query.pid)

// sendSuggestion()
      //@ts-ignore 

const arr=[];
  const result =  await new Promise((resolve,reject)=>{
    
     base('السيرة الذاتية').select({
      //@ts-nocheck
      //@ts-ignore
    // Selecting the first 3 records in كل البيانات:
    // maxRecords: 3,
    view: "كل البيانات"
}).eachPage(function page(records, fetchNextPage) {
    // This function (`page`) will get called for each page of records.

    records.forEach(function(record) {
      console.log(req.query.pid)
      if(req.query.pid == record.get("Name") ) arr.push(record);
      
    });
  


  //@ts-nocheck
  //@ts-ignore
  resolve(arr)
}, function done(err) {
    if (err) { console.error(err); return; }
});
})

  res.json(result)
}

  // export base;