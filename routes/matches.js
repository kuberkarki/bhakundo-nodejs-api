const router=require('express').Router();
const Match=require('../models/Match');

router.get('/',async (req,res)=>{

    try{
        const matches=await Match.find().sort({date:1});
        res.json(matches);
    }catch(error){
        res.status(400).send(error);
    }
});

router.post('/',async (req,res)=>{
    const match=new Match({
        team_home:req.body.team_home,
        team_away:req.body.team_away,
        home_score:req.body.home_score,
        away_score:req.body.away_score,
        match_date_time:req.body.match_date_time,
        match_time:req.body.match_time,
        Venue:req.body.Venue,
        home_team_gk:req.body.home_team_gk,
        home_team_defs:req.body.home_team_defs,
        home_team_mfs:req.body.home_team_mfs,
        home_team_mfs1:req.body.home_team_mfs1,
        home_team_mfs2:req.body.home_team_mfs2,
        home_team_fwds:req.body.home_team_fwds,
        home_team_subs:req.body.home_team_subs,
        away_team_gk:req.body.away_team_gk,
        away_team_defs:req.body.away_team_defs,
        away_team_mfs:req.body.away_team_mfs,
        away_team_mfs1:req.body.away_team_mfs1,
        away_team_mfs2:req.body.away_team_mfs2,
        away_team_fwds:req.body.away_team_fwds,
        away_team_subs:req.body.away_team_subs,
        match_status:req.body.match_status,
        description:req.body.description,
        match_attendance:req.body.match_attendance
    });

    try{
        const savedTeam=await match.save();
        // res.send({match: match._id});
        res.redirect(url.format({
            pathname: "/admin",
            query: {
                "msg":"added successfully",
                "match": match._id
            }
        }));

    }catch(err){
        res.status(400).send(err);
    }
});

module.exports=router;