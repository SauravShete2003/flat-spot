import Owner from '.././models/Owner.js'
import { query} from 'express'

const getOwner = (req , res)=>{
    const {userId} = req.query;
    console.log(userId)
}