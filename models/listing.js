const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const listingSchema =new Schema({
    title:{
        type:String,
        required:true,
    },
    description:String,
    image:{
        type:String,
        default:"https://images.unsplash.com/photo-1695575161610-7aeb03933996?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
        set:(v)=>v==="" ? "https://images.unsplash.com/photo-1695575161610-7aeb03933996?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60":v,
    },
    price:Number,
    location:String,
    country:String,

});

const Listing=mongoose.model("Listing",listingSchema);

module.exports=Listing;