import { useEffect,useState } from "react";
import Article from "./Article";

import React from "react";
import getNews from "../Services/api";

const Articles = () => {
	const [news, setNews] = useState([]);

	useEffect(()=>{
		dailyNews();
	}, []);



	const dailyNews = async () => {
		let response = await getNews();
		// console.log(respone.data);
		setNews(response.data);
	}




	return (
	<div>
		{
			news.map(data=>(
				<Article data={data}/>
			))
		}
	</div>
	)
}

export default Articles;