// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import Airtable ,{Table} from "airtable";
import { Console } from "console";
import type { NextApiRequest, NextApiResponse } from 'next'
var base = new Airtable({apiKey: 'patxcurNRUmoDr1fJ.38e74d9cb6cdbe1c4c46d457f3d9b4514cddb6af8fb09e0e3446ffb9da9dbdff'}).base('appkSvToN2W2ScgdW');

type Data = {
  name: string
}

export default async function handler(
 
 
 
  req: NextApiRequest,
  res: NextApiResponse
) {

  const result =  await new Promise((resolve,reject)=>{


    base('كل البيانات').select({
        // Selecting the first 3 records in Grid view:
        maxRecords: 50,
        view: "Grid view"
    }).eachPage(function page(records, fetchNextPage) {
        // This function (`page`) will get called for each page of records.
    
        records.forEach(function(record,s) {
            console.log(s)
            console.log('Retrieved', record.get('Name'));
        });
    
 resolve(records)       
    }, function done(err) {
        if (err) { console.error(err); return; }
    });

 
})

  res.status(200).json(result)
}
