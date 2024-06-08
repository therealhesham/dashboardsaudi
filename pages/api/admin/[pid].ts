// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import Airtable ,{Table} from "airtable";

import { Console } from "console";
import { jwtDecode } from "jwt-decode";
import jwt from "jsonwebtoken"
import type { NextApiRequest, NextApiResponse } from 'next'
var base = new Airtable({apiKey: 'patxcurNRUmoDr1fJ.38e74d9cb6cdbe1c4c46d457f3d9b4514cddb6af8fb09e0e3446ffb9da9dbdff'}).base('appkSvToN2W2ScgdW');
type Data = {
  name: string
}

export default async function handler(req: NextApiRequest,res: NextApiResponse) {
 
  // sendSuggestion()
      //@ts-ignore 

const arr=[];
  const result =  await new Promise((resolve,reject)=>{
      //@ts-ignore 

    base('كل البيانات').select({
      //@ts-ignore
      // fields:["office"],
        // Selecting the first 3 records in Grid view:
        view: "Grid view"
    }).eachPage(function page(records, fetchNextPage) {
        // This function (`page`) will get called for each page of records.
        records.forEach(function(record,s) {
            // console.log(s)
            // console.log('Retrieved', record.get("office"));
    // console.log(req.query.pid == record.get("office"))
    //@ts-ignore
    if(req.query.pid == record.get("office") ) arr.push(record);
          });
      //@ts-ignore 
    // console.log(arr)
      //@ts-ignore 
 resolve(arr) 

    }, function done(err) {
        if (err) { console.error(err); return; }
    });

 
})

  res.json(result)
}

  // export base;