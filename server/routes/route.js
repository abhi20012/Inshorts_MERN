import express from "express";
import News from "../Schema/news-schema.js";


const route = express.Router();

route.get('/news', async (request, response)=>{
	try{
		let data = await News.find({});
		response.status(200).json(data);
	}catch(error){
		response.status(400).json({message: data.message});
	}
})

export default route;