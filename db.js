const mongoose = require('mongoose')

//MongoDB connection ex, mongodb://localhost:27017/postManagerDB
const MongoDBURL = "mongodb+srv://PranayRathi:PranayRathi@adminpanel.sdxqe.mongodb.net/<dbname>?retryWrites=true&w=majority"


mongoose.connect(MongoDBURL,{useNewUrlParser:true,useUnifiedTopology:true},
    err => {
        if (!err)
            console.log('Mongodb connection succeeded.')
        else
            console.log('Error while connecting MongoDB : ' + JSON.stringify(err, undefined, 2))
    })