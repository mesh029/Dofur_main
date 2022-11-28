const router = require('express').Router()
const Fund = require('../models/Funds')



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




//Get a single recipients funds

router.get("/:id", async(req, res)=>{
    try{
        let fund
        fund = await Fund.findOne({_id: req.params.id})
        res.status(200).json(fund)
        }
        catch(err)  {
            res.status(500).json(err)
        }
})

//get total sum of recipient funds

router.get("/", async (req, res) => {

    try {
      let fundsTotal;

      let funds 


      fundsTotal = await Fund.aggregate(
        [
          {
            '$group': {
              '_id': null, 
              'subTotal': {
                '$sum': '$recipientsCurrentFunds'
              }
            }
          }
        ]
    )

    funds = fundsTotal[0]

        
      res.status(200).json(funds);
      console.log(funds)
    } catch (err) {
      res.status(500).json(err);
    }
  });


//Update recipient's funds

router.put("/:id", async (req, res) => {
    try {
      const funds = await Fund.findById(req.params.id);
        try {
          const updatedFunds = await Fund.findByIdAndUpdate(
            req.params.id,
            {
              $set: req.body,
            },
            { new: true }
          );
          res.status(200).json(updatedFunds);
        } catch (err) {
          res.status(500).json(err);
      } 
    } catch (err) {
      res.status(500).json(err);
    }
  });



module.exports = router