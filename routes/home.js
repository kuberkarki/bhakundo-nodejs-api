const router=require('express').Router();
const Team=require('../models/Team');
const Player=require('../models/Player');
const Match=require('../models/Match');
const TeamPlayer=require('../models/TeamPlayer');

router.get('/', async (req, res) => {
    try{
        const teams=await Team.where({active:true}).sort({name:1});
        const players=await Player.where({active:true}).sort({name:1});

        var startDate = new Date(new Date().getTime() - (3 * 24 * 60 * 60 * 1000));
        var endDate   = new Date(new Date().getTime() + (3 * 24 * 60 * 60 * 1000)); //req.params.endTime = 2016-09-25 01:00:00

        const matches=await Match.find({
            match_date_time: {
            // $gt:  new Date(startDate).toISOString(),
            // $lt:  new Date(endDate).toISOString()
            $gt:  startDate,
            $lt:  endDate
        }}).populate('team_home').populate('team_away');
        // res.json(teams);
        res.render('home',{teams:teams,players:players,matches:matches});
    }catch(error){
        res.render('400',{error:error});
    }
});

router.get('/admin', async (req, res) => {
    const teams=await Team.where({active:true}).sort({name:1});
    const players=await Player.where({active:true}).sort({name:1});
    const teamplayers=await TeamPlayer.where({active:true}).populate('team').populate('player');
    // console.log(teams.player);
    res.render('admin',{teams:teams,players:players,teamplayers:teamplayers});
});

module.exports=router;