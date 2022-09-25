const express = require('express');

const router = express.Router();
const newsController=require("../controller/newsController")

router.post('/createNews',newsController.createNews)

router.get("/getAllnews",newsController.getAllNews)


module.exports = router;
