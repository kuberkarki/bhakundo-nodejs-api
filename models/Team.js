const db= require("mongoose");

const teamSchema=db.Schema({
    name:{
        type:String,
        require: true,
        min:2,
        max:255
    },
    logo:{
        type:String
    },
    short_name:{
        type:String,
        require: true,
        max:5
    },
    address:{
        type: String
    },
    website:{
        type: String
    },
    email:{
        type: String
    },
    phone:{
        type: String
    },
    home_kit:{
        type: String
    },
    away_kit:{
        type: String
    },
    third_kit:{
        type: String
    },
    description:{
        type: String
    },
    active:{
        type: Boolean,
        default: true
    }
});
module.exports=db.model('Team',teamSchema);