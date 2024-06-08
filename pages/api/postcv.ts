import Airtable, { Table } from "airtable";



var base = new Airtable({apiKey: 'patxcurNRUmoDr1fJ.38e74d9cb6cdbe1c4c46d457f3d9b4514cddb6af8fb09e0e3446ffb9da9dbdff'}).base('appkSvToN2W2ScgdW');
type Data = {
  name: string
}


function sendSuggestion() {
  // const { title, author, message } = data;
  const table = base("كل البيانات");

    return new Promise((resolve, reject) => {
      table.create(
        {
          // Title: title,
          nationality: "ssss",
        //@ts-ignore
          Picture:[{


            'filename':'sss'
,
'url': 'https://res.cloudinary.com/duo8svqci/image/upload/v1714474481/samples/tqi1oeppme5ejhqlk78c.jpg',
}   ]     },
        //@ts-ignore

        function (err, record) {
          if (err) {
console.log(err)
            reject();
          }
          console.log("s")
          resolve(record);
        }
      );
    });
  }
