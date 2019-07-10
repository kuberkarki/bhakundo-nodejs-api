const db= require("mongoose");

const matchSchema=db.Schema({
    team_home:{ type: db.Schema.Types.ObjectId, ref: 'Team' },
    team_away:{ type: db.Schema.Types.ObjectId, ref: 'Team' },
    photo:{
        type:String
    },
    home_score:{
        type:Number
    },
    away_score:{
        type: Number
    },
    match_date_time:{
    // var startDate = moment(req.params.startTime).utcOffset('+0700').format("YYYY-MM-DDTHH:mm:ss.SSSZ"); //req.params.startTime = 2016-09-25 00:00:00
    // var endDate   = moment(req.params.endTime).utcOffset('+0700').format("YYYY-MM-DDTHH:mm:ss.SSSZ"); //req.params.endTime = 2016-09-25 01:00:00

        type: Date
    },
    match_time:{
        type: String
    },
    Venue:{
        type: String
    },
    attendance:{
        type: Number
    },
    description:{
        type: String
    },
    match_status:{
        type: String
    },
    home_penalty_score:{
        type: Number
    },
    away_penalty_score:{
        type: Number
    },
    match_result:{//teamhome or away or draw
        type: String
    },
    man_of_the_match:{ type: db.Schema.Types.ObjectId, ref: 'Player' },
    home_team_gk:{ type: db.Schema.Types.ObjectId, ref: 'Player' },
    home_team_defs:[{type: db.Schema.Types.ObjectId, ref: 'Player' }],
    home_team_mfs:[{type: db.Schema.Types.ObjectId, ref: 'Player' }],
    home_team_mfs1:[{type: db.Schema.Types.ObjectId, ref: 'Player' }],
    home_team_mfs2:[{type: db.Schema.Types.ObjectId, ref: 'Player' }],
    home_team_fwds:[{type: db.Schema.Types.ObjectId, ref: 'Player' }],
    home_team_subs:[{type: db.Schema.Types.ObjectId, ref: 'Player' }],
    away_team_gk:{ type: db.Schema.Types.ObjectId, ref: 'Player' },
    away_team_defs:[{type: db.Schema.Types.ObjectId, ref: 'Player' }],
    away_team_mfs:[{type: db.Schema.Types.ObjectId, ref: 'Player' }],
    away_team_mfs1:[{type: db.Schema.Types.ObjectId, ref: 'Player' }],
    away_team_mfs2:[{type: db.Schema.Types.ObjectId, ref: 'Player' }],
    away_team_fwds:[{type: db.Schema.Types.ObjectId, ref: 'Player' }],
    away_team_subs:[{type: db.Schema.Types.ObjectId, ref: 'Player' }]
});
module.exports=db.model('Match',matchSchema);