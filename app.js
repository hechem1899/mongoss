const mongoose=require('mongoose')
require('dotenv').config()
mongoose.connect(process.env.MONGO_URI,{ useNewUrlParser: true,useUnifiedTopology: true  } ,(er)=>{
    if(er){console.log(er)}
    else {console.log("db is connected")}
})