import axios from 'axios';

const getNews = async () => {

	const URL = 'http://localhost:8000';

	try {
		return await axios.get(`${URL}/news`);
	} catch (error) {
		console.log("Error while calling getnews api", error);
	}
}

export default getNews;