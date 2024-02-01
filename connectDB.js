const mongoose=require('mongoose')

const connectDB=()=>{
    mongoose.connect("mongodb+srv://nourouali026:nour@cluster0.bipldnj.mongodb.net/?retryWrites=true&w=majority")
    .then (()=>console.log("db connected successfully"))
    .catch((err)=>console.log(err)
    )   
};

module.exports=connectDB