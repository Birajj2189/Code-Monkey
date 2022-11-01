// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from 'fs';

export default async function handler(req, res) {
  
     let files = await fs.promises.readdir('blogdata',);
     let allFiles = [];
          for (let index = 0; index < files.length; index++) {
               const file = files[index];
               let myFile = await fs.promises.readFile(('blogdata/'+file),'utf-8');
               console.log(myFile);
               allFiles.push(JSON.parse(myFile));
          }
          res.status(200).json(allFiles);



   }
   