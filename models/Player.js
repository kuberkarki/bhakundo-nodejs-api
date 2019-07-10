const db= require("mongoose");

const playerSchema=db.Schema({
    name:{
        type:String,
        require: true,
        min:2,
        max:255
    },
    photo:{
        type:String
    },
    short_name:{
        type:String,
        require: true,
        max:5
    },
    position:{
        type: String
    },
    dob:{
        type: String
    },
    height:{
        type: String
    },
    nationality:{
        type: String
    },
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
module.exports=db.model('Player',playerSchema);