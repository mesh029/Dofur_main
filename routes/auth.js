const router = require("express").Router();
const Recipient = require("../models/Recipient");
const Funds = require("../models/Funds")
const Donor = require('../models/Donor');
const Admin = require("../models/Admin");
const Guardian = require("../models/Guardian")
const bcrypt = require("bcrypt");



//New Recipient
router.post("/recipient", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password, salt);



    const newGuardian = new Guardian({
      gname: req.body.gname,
      gaddress: req.body.gaddress
    })

    const guardian = await newGuardian.save()
    
    const newFunds = new Funds({
      recipientsTargetFunds: req.body.funds,
      recipientsCurrentFunds: req.body.currentFunds,

    })

    const fund = await newFunds.save()

    const newRecipient = new Recipient({
        username: req.body.username,
        address:req.body.address,
        description: req.body.description,
        password: hashedPass,
        guardianId: newGuardian._id,
        recipientFundId: newFunds._id,
        schoolAddress: req.body.schoolAddress,
        schoolCity: req.body.schoolCity,
        school: req.body.school,
        dob: req.body.dob,
        gender: req.body.gender,
        userClass: req.body.userClass

    })

    const recipient = await newRecipient.save()



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
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.dpassword, salt);


    const newDonor = new Donor({
        dusername: req.body.dusername,
        demail: req.body.demail,
        dadress: req.body.dadress,
        dpassword: hashedPass

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
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.apassword, salt);


    const newAdmin = new Admin({
        ausername: req.body.ausername,
        aemail: req.body.aemail,
        aposition: req.body.aposition,
        apassword: hashedPass

    })

    const admin = await newAdmin.save()
    res.status(200).json(admin)

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



//LOGIN
router.post("/login", async (req, res) => {
  try {

    const user = await Recipient.findOne({"address.email": req.body.address }) || await Donor.findOne({ demail: req.body.address }) || await Admin.findOne({ aemail: req.body.address })
    !user && res.status(400).json("Wrong credentials!");

  
    const validated = await bcrypt.compare(req.body.password, user.password || user.apassword || user.dpassword);
    !validated && res.status(400).json("Wrong credentials!");

    res.status(200).json(user);
  } catch (err) {
    console.log(err)
  }
});


module.exports = router;
