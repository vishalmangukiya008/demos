let express = require('express')
let router = express.Router()
let userModel = require('../models/user')



router.get('/', (req, res) => {

    userModel.find()
        .then(function (users) {
            res.send({
                status: 200,
                data: users,

            })
        })
        .catch(function (err) {
            res.send({
                status: 200,
                message: err,
            })
        });


})

router.post('/add-user', (req, res) => {

    let data = req.body

    let user = userModel({
        id: data.id,
        name: data.name
    })

    user.save().then(() => {
        res.send({
            status: 200,
            message: "Data Added...!",

        })
    }).catch((err) => {
        res.send({
            status: 200,
            error: "Data not Add...!",

        })
    })

})


// router.delete('/delete-user/:id',(req,res)=>{

//    usersData = usersData.filter(item => item.id !== req.params.id)
//    res.send({
//     status:200,
//     message:"User Deleted...!",

// })
// })


// router.put('/update-user',(req,res)=>{

//     userIndex = usersData.findIndex((obj => obj.id == req.body.id));

//     if(req.body.name!=undefined){
//         usersData[userIndex].name = req.body.name
//     }

//     if(req.body.mobile!=undefined){
//         usersData[userIndex].mobile = req.body.mobile
//     }

//     if(req.body.address!=undefined){
//         usersData[userIndex].address = req.body.address
//     }
//     res.send({
//      status:200,
//      message:"User updated...!",

//  })
//  })


module.exports = router;