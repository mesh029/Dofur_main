const router = require("express").Router();
const Recipient = require("../models/Recipient");
const Funds = require("../models/Funds")
const Donor = require('../models/Donor');
const Admin = require("../models/Admin");
const Guardian = require("../models/Guardian")

//New Recipient
router.post("/", async (req, res) => {
  try {

    const newGuardian = new Guardian({
      gname: req.body.gname,
      gaddress: req.body.gaddress
    })

    const guardian = await newGuardian.save()
    


    const newRecipient = new Recipient({
        username: req.body.username,
        address:req.body.address,
        guardianId: newGuardian._id

      
    })

    const recipient = await newRecipient.save()

    const newFunds = new Funds({
      recipientFundsId: newRecipient._id,
      recipientsCurrentFunds: 0,
      recipientsTargetFunds: 0
    })


    const fund = await newFunds.save()

    // using this res method twice in a single route header will cause an error

    //Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client
    res.status(200).json(guardian, fund, recipient)


  } catch (err) {
    res.status(500).json(err);
    console.log("error has occured", err)
  }
});


//New Donor
router.post("/donor", async (req, res) => {
  try {
    const newDonor = new Donor({
        username: req.body.username,
        homeAddress: req.body.desc,
        adress: req.body.adress,

    })

    const donor = await newDonor.save()
    res.status(200).json(donor)

  } catch (err) {
    res.status(500).json(err);
    console.log("error has occured", err)
  }
});

//New Admin
router.post("/admin", async (req, res) => {
  try {
    const newAdmin = new Admin({
        username: req.body.username,
        adress: req.body.adress,
        position: req.body.position

    })

    const admin = await newAdmin.save()
    res.status(200).json(donor)

  } catch (err) {
    res.status(500).json(err);
    console.log("error has occured", err)
  }
});




//Get all recipients
router.get("/", async (req, res) => {

  try {
    let posts;
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
});



module.exports = router;
