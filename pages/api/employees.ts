//@ts-ignore
//@ts-nocheck

import Airtable ,{Table} from "airtable";
import { Console } from "console";
import Cookies from "js-cookie";
import jwt from "jwt-decode";
import type { NextApiRequest, NextApiResponse } from 'next'
var base = new Airtable({apiKey: 'patXrez1aIa2i3whF.410e92b1b07ab85712cd0722ad462964185aecd969949bde6e36295f7a2e8fc2'}).base('appUGFHsf0FQduyTw');
type Data = {
  name: string
}

export default async function handler(req: NextApiRequest,res: NextApiResponse) {
// sendSuggestion()
  
try {
const result =  await new Promise((resolve,reject)=>{




base('الموظفين').select({
    // Selecting the first 3 records in Grid view:
    maxRecords: 3,
    view: "Grid view"
}).eachPage(function page(records, fetchNextPage) {
    // This function (`page`) will get called for each page of records.



resolve(records)

    
}, function done(err) {
    if (err) { console.error(err); return; }
});

 
})

  res.status(200).json(result)  
} catch (error) {
  
}

}

  // export base;