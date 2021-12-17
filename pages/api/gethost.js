// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios'
export default async function handler(req, res) {
    try{
        res.status(200).json({ success: 'true', data: req.headers })
   
    }catch(err){
        console.log(err)
        res.status(500).json({success:false, error: 'Internal Server Error'})
    }
}
