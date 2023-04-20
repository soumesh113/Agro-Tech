const mongoose=require("mongoose");
const UserDetailsSchema= new mongoose.Schema(
    {
        username:{type:String,unique:true},
        email:String,
        password:String,
        mobilenumber:String,
        address:String,
        City:String,
        Country:String,
    },{
        collection:"UserInfo"
    }
);
mongoose.model("UserInfo",UserDetailsSchema);

