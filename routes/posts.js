const router=require('express').Router();
const verify=require('../verifytoken');
const User=require('../models/User');

router.get('/',verify,async (req,res)=>{
    // const currentuser= await User.findOne({_id : req.user._id})
    res.send(req.user);
    // res. json({posts:{title:"first post",description:"first post description"}});
});

module.exports=router;