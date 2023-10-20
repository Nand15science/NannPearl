const express=require('express');
const app= express();

app.get('/',(req,res)=>{
    res.send('Hello To  World From Ashu');
});

app.listen(8000,()=>{
    console.log('listening on port 8000');
});