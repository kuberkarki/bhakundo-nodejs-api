const router=require('express').Router();
const Team=require('../models/Team');

router.get('/',async (req,res)=>{

    try{
        const teams=await Team.find().sort({name:1});
        res.json(teams);
    }catch(error){
        res.status(400).send(error);
    }
});

router.post('/',async (req,res)=>{
    const team=new Team({
        name:req.body.name,
        logo:req.body.logo,
        short_name:req.body.short_name,
        address:req.body.address,
        website:req.body.website,
        email:req.body.email,
        phone:req.body.phone,
        home_kit:req.body.home_kit,
        away_kit:req.body.away_kit,
        third_kit:req.body.third_kit,
        description:req.body.description,
        active:req.body.active
    });

    try{
        const savedTeam=await team.save();
        res.send({team: team._id});

    }catch(err){
        res.status(400).send(err);
    }
});

module.exports=router;