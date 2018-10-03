// route for posting data into the database

//route for getting the data from the database

//route for deleting data from the database

const express = require('express');
const router = express.Router();
// destruct
let {Client} = require('../models/clientModel');

const wrap = require("../middleware/wrap");

// return all the posts
router.get('/clients', (req, res,err) =>{
  if (err) {
    console.log(err);
  }
  Client.find().exec(function(err, clients){
    if (err){
      console.log('err to return clients: '+err);
    }
    res.send(clients);
  });  
}); 

// add new client
router.post('/client',(req, res,err) =>{
  if(err) {
    console.log(err);
  };
  let newPost = new Post({
    text: req.body.text ,
    comments: []
  });
  newPost.save((err,data)=>{
    if (err) {
      console.log(err);
    }
    res.json(data);
  }); 
});

//update
router.put('/client/:clientID', wrap(async (req, res) =>{
  let {clientID} = req.params;
  Client.findByIdAndUpdate(clientID)
  .then((data)=>{
    console.log("client updated");
    res.send(data);
  })
  .catch((err)=>{
    console.log(err);
  })
}));


// delete post
router.delete('/client/:clientID', wrap(async (req, res) =>{
  let {clientID} = req.params;
  Client.findByIdAndRemove(clientID)
  .then((data)=>{
    console.log("client deleted");
    res.send(data);
  })
  .catch((err)=>{
    console.log(err);
  })
}));

module.exports = router;