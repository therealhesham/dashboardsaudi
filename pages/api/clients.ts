// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import Airtable ,{Table} from "airtable";

import { Console } from "console";
import type { NextApiRequest, NextApiResponse } from 'next'
var base = new Airtable({apiKey: 'patXrez1aIa2i3whF.410e92b1b07ab85712cd0722ad462964185aecd969949bde6e36295f7a2e8fc2'}).base('appUGFHsf0FQduyTw');
type Data = {
  name: string
}

export default async function handler(req: NextApiRequest,res: NextApiResponse) {
// sendSuggestion()
  const result =  await new Promise((resolve,reject)=>{


    base('طلبات من الموقع الالكتروني').select({
      //  fields:{}
        // Selecting the first 3 records in Grid view:
        view: "Grid view"
    }).eachPage(function page(records, fetchNextPage) {
    
 resolve(records)       
//  fetchNextPage()
    }, function done(err) {
        if (err) { console.error(err); return; }
    });

 
})

  res.status(200).json(result)
}

  // export base;