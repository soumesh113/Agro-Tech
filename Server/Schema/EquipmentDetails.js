<<<<<<< HEAD
const mongoose=require("mongoose");
const EquipmentDetails= new mongoose.Schema(
    {
        Username: String,
        Equipmentname: String,
        Price:Number,
        Description: String,
        Image: String,
        Quantity:String,
        Phone_number: String,
        Country: String,
        State: String,
        Address: String,
        City: String,
        Postal_code: String
    },
    {
        collection:"EquipmentDetails"
    }
);
=======
const mongoose=require("mongoose");
const EquipmentDetails= new mongoose.Schema(
    {
        Username: String,
        Equipmentname: String,
        Price:String,
        Description: String,
        Image: String,
        Quantity:String,
        Phone_number: String,
        Country: String,
        State: String,
        Address: String,
        City: String,
        Postal_code: String
    },
    {
        collection:"EquipmentDetails"
    }
);
>>>>>>> 92337f96e7f000497b5ac190f20e67ccf2b92974
mongoose.model("EquipmentDetails",EquipmentDetails);