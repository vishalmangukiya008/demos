let express = require('express')
let app = express()



app.get("/index/:id/:name",(req,res)=>{

    let param = req.params;

    console.log("result:"+(!isNaN(param.id))+typeof(param.name))
    if((!isNaN(param.id))&& isNaN(param.name)){
        res.status(400).send({
            id:param.id,
            name:param.name,
            salary:45000,
            mobile:"+91 9898767657"
        })
    }else{
        res.status(400).send({
            error:"please send data propar"
        })
    }

    
   
})



app.listen(8080,()=>{
    console.log("server listen on:http://localhost:8080")
})