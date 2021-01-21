const router = require('express').Router(); 
const userValidate = require('../models/users');

router.post('/users', async (req,res,next)=>{
     
    try{
        
        const valor = await userValidate.validateUser(req.body);

        res.json({status:'ok'});

    }catch (error) {

      //next(error);
      res.json({
        message:error.message
      });

}
});


module.exports = router;