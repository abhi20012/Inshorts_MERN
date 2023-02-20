import mongoose from "mongoose";

const Connection = async (username, password) => {
	mongoose.set('strictQuery', true);
	const URL = `mongodb+srv://${username}:${password}@crud-app.ldm2wv0.mongodb.net/user_data?retryWrites=true&w=majority`;
	try{
		await mongoose.connect(URL,{});
		console.log("Database Connected");
	}catch(error){
		console.log("Error while connecting to database", error);
	}
}

export default Connection;