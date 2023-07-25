let express = require('express')
let app = express()
let userRoute = require('./routes/users') 

//this is test
const mongoose = require('mongoose');
const url = "mongodb://127.0.0.1:27017/school";

mongoose.connect(url).then(() => {
    console.log("Connected to Database");
}).catch((err) => {
    console.log("Not Connected to Database ERROR! ", err);
});


app.use(express.json())
app.use('/users',userRoute)

app.use('*',(req,res)=>{
    res.send({
        status:400,
        message:"Page Not Found"
    })
})


app.listen(8080)