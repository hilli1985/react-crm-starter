
const express = require('express');
const router = express.Router();

// destruct
let {Client} = require('../models/clientModel');

const wrap = require("../middleware/wrap");

router.get('/insertClients',(req,res,err)=>{
  if (err){
    console.log(err);
  }
  let data = require('../src/data.json');
  //res.send(data);
  data.map ((client)=>{
    //save it to the DB
    let clientItem = new Client (client)
    clientItem.save((err,data)=>{
      if (err) {
        console.log(err);
      }
      console.log(clientItem);
      //console.log("client:"+data);
    });
  });
  res.send('add all clients');
}

) 

// return all the clients
router.get('/clients', (req, res,err) =>{
  if (err) {
    console.log(err);
  }
  Client.find().exec((err, clients)=>{
    if (err){
      console.log('err to return clients: '+err);
    }
    res.send(clients);
  });  
}); 


// return specific client 
router.get('/client/:clientID', (req, res,err) =>{
  let {clientID} = req.params;
  let dummydata = '5bb5c72a071693f8a75e4e73';
  Client.find({"_id":clientID}).exec((err, client) => {
    if (err) {
      console.log(err);
    }
    res.send(client);
  });
}); 

//add new client
router.post('/client',(req,res,err) =>{
  let client = req.body;
  if(err) {
    console.log(err);
  };
  let newClient = new Client({
    name: client.name,
    email: client.email,
    firstContact: client.firstContact,
    emailType: client.emailType,
    sold: client.sold,
    owner: client.owner,
    country: client.country
  });
  newClient.save((err,data)=>{
    if (err) {
      console.log(err);
    }
    res.json(data);
  }); 
});

//update
// router.put('/client/:clientID', wrap(async (req, res) =>{
//   let {clientID} = req.params;
//   Client.findByIdAndUpdate(clientID)
//   .then((data)=>{
//     console.log("client updated");
//     res.send(data);
//   })
//   .catch((err)=>{
//     console.log(err);
//   })
// }));


// // delete post
// router.delete('/client/:clientID', wrap(async (req, res) =>{
//   let {clientID} = req.params;
//   Client.findByIdAndRemove(clientID)
//   .then((data)=>{
//     console.log("client deleted");
//     res.send(data);
//   })
//   .catch((err)=>{
//     //console.log(err);
//   })
// }));

module.exports = router;