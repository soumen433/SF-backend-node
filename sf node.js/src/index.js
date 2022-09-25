const express=require("express")
const app=express()
const mongoose=require("mongoose")
const bodyParser=require("body-parser")
const cors=require("cors")
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const route=require("./route/router")
mongoose.connect("mongodb+srv://sudhanshu48:123abc@functionup.veeix.mongodb.net/SF", {
    useNewUrlParser: true
})
    .then(() => console.log("MongoDb is connected"))
    .catch(err => console.log(err))

    app.use('/', route)

    app.listen(process.env.PORT || 3000, function () {
        console.log('Express app running on port ' + (process.env.PORT || 3000))
    });