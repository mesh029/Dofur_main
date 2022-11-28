const router = require('express').Router()
const Recipient = require('../models/Recipient')
const { post } = require('./auth')



//Get recipient



//Delete recipient

router.delete("/:id", async(req, res)=>{
    try{

        const recipient = await Recipient.findById(req.params.id)
        
        if(Recipient.username === recipient.username){
        
            try {
                await recipient.delete()
                res.status(200).json('User successfuly deleted')
                
            } catch (error) {
                res.status(500).json(err)
            }
        }
        else{
            res.status(401).json("is this really your account??")
        }
        
        }catch(err){
            res.status(500).json(err)
        }
        

})




//Get recipient

router.get("/", async(req, res)=>{

    try{
        let recipients

        recipients = await Recipient.find()
        res.status(200).json(recipients)
        }
        catch(err){
            res.status(500).json(err)
        }
})


//Get unverified

router.get("/getunverified", async(req, res)=>{
    const label = req.query.verified;

    try{
        let recipients

        recipients = await Recipient.find({verified: false})
        res.status(200).json(recipients)
        }
        catch(err){
            res.status(500).json(err)
        }
})

//Put recipient

router.put("/:id", async (req, res) => {
    try {
      const recipients = await Recipient.findById(req.params.id);
        try {
          const updatedRecipient = await Recipient.findByIdAndUpdate(
            req.params.id,
            {
              $set: {verified: true}
            },
            { new: true }
          );
          res.status(200).json(updatedRecipient);
        } catch (err) {
          res.status(500).json("whatever the fuck",err);
      } 
    } catch (err) {
      res.status(500).json(err);
    }
  });



module.exports = router