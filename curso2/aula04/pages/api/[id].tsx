import type { NextApiHandler } from 'next';
const handler:NextApiHandler=(req,res)=>{
    const id=req.query.id;
    res.status(200).json({post:id});
}
export default handler;