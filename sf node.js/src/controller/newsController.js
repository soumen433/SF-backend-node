const newsModel=require("../model/newsModel")


const createNews=async function(req,res){
    let data=req.body
    console.log(data)

    await newsModel.create(data)
}

const getAllNews=async function(req,res){
    let allData=await newsModel.find()
    res.send(allData)
}

module.exports.createNews = createNews

module.exports.getAllNews =getAllNews