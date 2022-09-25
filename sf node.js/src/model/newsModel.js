const mongoose = require("mongoose");



const newsSchema = new mongoose.Schema({
    newsTitle:{
        type:String,
        
    },
    newsDescription:{
        type:String
    },
    publishDate:{
        type:String
    }

}, { timestamps: true });

module.exports = mongoose.model("news", newsSchema)