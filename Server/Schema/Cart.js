const mongoose=require("mongoose");
const Cart= new mongoose.Schema(
    {
         Username: String,
         Total_Amount: String,
         Items: [
             {
                id: String,
                name: String,
                amount: Number,
                price: Number
             }        ],
            Address: String,
            Order_ID: String
    },
    {
        collection:"Cart"
    }
);
mongoose.model("Cart",Cart);