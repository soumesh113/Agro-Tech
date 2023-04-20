const mongoose=require("mongoose");
const CropDetailsSchema= new mongoose.Schema(
    {
      username:String,
      productName:String,
      quatity:Number,
      mobileNumber:String,
      country:String,
      address:String,
      state:String,
      city:String,
      postralCode:String
    },
    {
        collection:"CropDetails"
    }
);
mongoose.model("CropDetails",CropDetailsSchema);