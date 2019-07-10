const db= require("mongoose");

const teamplayerSchema=db.Schema({
    player:{type: db.Schema.Types.ObjectId, ref: 'Player'},
    team:{type: db.Schema.Types.ObjectId, ref: 'Team'},
    transfer_date:{
        type: Date
    },
    position:{type:String},
    shirt_number:{
        type: Number
    },
    description:{
        type: String
    },
    active:{
        type: Boolean,
        default: true
    }
});
module.exports=db.model('TeamPlayer',teamplayerSchema);