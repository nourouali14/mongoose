const express= require("express")
const app= express()
const person=require('./modules/personSchema')
const connectedDB=require('./config/connectDB')
connectedDB() 

const port=  5000
const addPerson=async()=>{
    const nour=new person({name:"nour",age:21,favoritFood:['ma9rouna','brik']})
    await
    nour.save()
    }
 addPerson ()
 const addPerson1=async()=>{
    const hamza=new person({name:"hamza",age:28,favoritFood:['lablebi']})
    await
    hamza.save()
    }
    addPerson1 ()

  const updatPerson=async()=>{
    await person.findByIdAndUpdate("65bba98ae47fad98c6a49505",{$set:{name:"amjed"}})
  }
    updatPerson ()
    const findPerson=async()=>{
        await person.findOne({name:'nour'})
    }
    findPerson()
   
    const deletPerson=async()=>{
        await person.findByIdAndRemove("65bba98ae47fad98c6a49505")
    }
    deletPerson()
        
    
app.listen(port,(err)=>err? console.log(err):console.log("app listing on port:" +port))
