import { data } from "./Shorts/data.js";
import News from "./Schema/news-schema.js";



const DefaultData = async () => {
	try{
		await News.deleteMany({});
		await News.insertMany(data);
		console.log("Data imported succesfully");
	}catch(error){
		console.log("Error in default.js",error);
	}
}

export default DefaultData;