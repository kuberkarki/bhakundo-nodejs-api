const db=require("mongoose");
const userSchema=new db.Schema({
    name:{
        type: String,
        required: true,
        min:4,
        max:255
    },
    email:{
        type: String,
        required: true,
        max:255,
        min:6
    },
    password:{
        type: String,
        required: true,
        max:32
    },
    date:{
        type: Date,
        default: Date.now
    },
    access_level:{
        type: Number,
        default: 0
    }
});

module.exports=db.model('User',userSchema);

