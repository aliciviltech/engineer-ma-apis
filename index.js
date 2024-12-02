import express from 'express'
import { albums, comments, photos, posts, todos, users } from './allData.js';
const router = express();


router.get('/posts',(req,res)=>{
    res.status(200).send({status:200,message:"success",data:posts})
})
router.get('/comments',(req,res)=>{
    res.status(200).send({status:200,message:"success",data:comments})
})
router.get('/albums',(req,res)=>{
    res.status(200).send({status:200,message:"success",data:albums})
})
router.get('/photos',(req,res)=>{
    res.status(200).send({status:200,message:"success",data:photos})
})
router.get('/todos',(req,res)=>{
    res.status(200).send({status:200,message:"success",data:todos})
})
router.get('/users',(req,res)=>{
    res.status(200).send({status:200,message:"success",data:users})
})
router.listen(8800,()=>{
    console.log('server started: 8800')
})