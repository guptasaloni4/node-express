import express from 'express';
const appName = process.env.appName || "node-express";
const PORT =process.env.PORT || 8085;
import sum from './utils/sum.js';

const app = express();

const dirName = import.meta.dirname;
const filePath = dirName + '/utils/hello.html';

app.get('/'+ appName + '/welcome' , (req,res)=>{
    res.sendFile(filePath);
})
app.get('/'+ appName + '/calculate' , (req,res)=>{
    let x = 345, y =896;
    const add = sum(x,y);
    res.send(`Addition of x, y = ${add}`);    
})

app.listen(PORT,()=>{
    console.log(`app is listening on localhost:${PORT}/${appName}`);
})