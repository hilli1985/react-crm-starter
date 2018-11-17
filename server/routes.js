const express = require("express");
const router = express.Router();
const { Client } = require("../models/clientModel");

//save each client to the DB
router.get("/insertClients", (req, res) => {
  let data = require("../src/data.json");
  data.map(client => {
    let clientItem = new Client(client);
    clientItem.save((err, data) => {
      if (err) {
        console.log(err);
        res.send("Error: Cannot add client to DB");
      }
      console.log(clientItem);
    });
  });
  res.send("add all clients");
});

// return all the clients
router.get("/clients", (req, res) => {
  Client.find().exec((err, clients) => {
    if (err) {
      console.log("Error: Cannot return clients: " + err);
      res.send("Error: Cannot return clients");
    }
    res.send(clients);
  });
});

// return specific client
router.get("/client/:clientID", (req, res) => {
  let { clientID } = req.params;
  Client.find({ _id: clientID }).exec((err, client) => {
    if (err) {
      console.log(err);
      res.send("Error: Cannot find client #" + clientID);
    }
    res.send(client);
  });
});

//add new client
router.post("/client", (req, res) => {
  let client = req.body;
  let newClient = new Client({
    name: client.name,
    email: client.email,
    firstContact: client.firstContact,
    emailType: client.emailType,
    sold: client.sold,
    owner: client.owner,
    country: client.country
  });
  newClient.save((err, data) => {
    if (err) {
      console.log(err);
      res.send("Error: Cannot add client");
    }
    res.json(data);
  });
});

//update client
router.put("/client/:clientID", (req, res) => {
  Client.findByIdAndUpdate(
    req.params.clientID,
    {
      $set: {
        name: req.body.name,
        country: req.body.country,
        owner: req.body.owner,
        emailType: req.body.emailType,
        sold: req.body.sold
      }
    },
    { new: true }, // get the updated
    //callback
    (err, client) => {
      if (err) {
        console.log(err);
        res.send("Error: Cannot update client #" + req.params.clientID);
      }
      res.send(client);
    }
  );
});

// delete post
router.delete("/client/:clientID", (req, res) => {
  Client.findByIdAndRemove(req.params.clientID, (err, client) => {
    if (err) {
      console.log(err);
      res.send("Error: Cannot update client #" + req.params.clientID);
    }
    res.send(client);
  });
  
  //callback instead of then and catch
  // .then((data)=>{
  //   console.log("client deleted");
  //   res.send(data);
  // })
  // .catch((err)=>{
  //   //console.log(err);
  // })
});

module.exports = router;
