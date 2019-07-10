const router=require('express').Router();
const User=require('../models/User');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const dotenv=require('dotenv');
const {registerValidation, loginValidation}=require('../validations');
const verify=require('../verifytoken');


router.get('/',(req,res)=>{
    res.send("hello user");
});

router.post('/register',async(req,res)=>{
    //validate now
    const {error}=registerValidation(req.body);
    if(error){
        return res.status(400).send(error.details[0].message);
    }
    //check if email already exists
    const emailExists = await User.findOne({email: req.body.email});
    if(emailExists){
        return res.status(400).send('Email already exists');
    }

    //hash the password
    const salt=await bcrypt.genSalt(10);
    const hashedPassword=await bcrypt.hash(req.body.password,salt);

    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
        access_level: 0
    });
    // user.save();
    try{
        const savedUser=await user.save();
        res.send({user: user._id});

    }catch(err){
        res.status(400).send(err);
    }
});

router.post('/login',async (req,res)=>{
    const {error}=loginValidation(req.body);
    if(error){
        return res.status(400).send(error.details[0].message);
    }

    //check if email already exists
    const user = await User.findOne({email: req.body.email});
    if(!user){
        return res.status(400).send('Email or password not valid');
    }

    //check if password is valid
    const validPass = await bcrypt.compare(req.body.password,user.password)
    if(!validPass){
        return res.status(400).send('Email or password not valid');
    }
//create jwt
dotenv.config();
const token=jwt.sign({_id:user._id,access_level:user.access_level},process.env.TOKEN_SECRET);
res.header('auth-token',token).json({message:"Login successful",token:token});

    // res.send("Login Successful");
});

router.get('/currentuser',verify,async (req,res)=>{
    const currentuser= await User.findOne({_id : req.user._id})
    res.send(currentuser);
    // res.json({posts:{title:"first post",description:"first post description"}});
});

module.exports=router;