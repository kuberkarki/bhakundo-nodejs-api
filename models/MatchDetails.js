const db= require("mongoose");

const matchDetailsSchema=db.Schema({
    match: {type: db.Schema.Types.ObjectId, ref: 'Match' },
    activity:{ //goal,foul,redcard,yellowcard,secondyellocard,corner,shot,panelty,owngoal,paneltymissed,addistionaltime
        type:String,
        require: true
    },
    activity_sub:{ //offtarget,ontarget,argument,foul,handball,goalkeepersave,timewasting,injured,additionaltimeminute
        type:String,
        require: true
    },
    team:{//teamhome or away or both
        type: String
    },
    player1: {type: db.Schema.Types.ObjectId, ref: 'Player' },
    player2:{//assist,substitute,penaltyconcededby
        type: db.Schema.Types.ObjectId,
        ref: 'Player'
    },
    minutes:{
        type: Number
    },
    description:{
        type: String
    }
});
module.exports=db.model('MatchDetails',matchDetailsSchema);