// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios'
export default async function handler(req, res) {
    try{
        if(req.headers['x-real-ip']=='62.210.208.90'){}
        else{
            res.status(200).json({ success: 'true', data: req.headers })
        }
   
    }catch(err){
        console.log(err)
        res.status(500).json({success:false, error: 'Internal Server Error'})
    }
}
