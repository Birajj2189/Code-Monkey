// http://localhost:3000/api/getblogs?slug=Programming-Is-Learned-Faster-With-These-7-Tips 
import * as fs from 'fs';

export default function handler(req, res) {
     fs.readFile(`blogdata/${req.query.slug}.json`, 'utf8', (err, data) => {
          if (err) {
            console.error(err);
            return;
          }
          console.log(req.query.slug);

          // NOTE : JSON.parse(data) converts text into JS object
          res.status(200).json(JSON.parse(data));
     });
   }
   