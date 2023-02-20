import React from "react";
import {styled } from '@mui/material';


const Container = styled("div")(({theme})=> ({
	background : '#f44336',
	color : '#fff',
	display: 'flex',
	justifyContent:"center",
	alignItems:"center",
	height:52,
	marginBottom:30,
	borderRadius:5,
	[theme.breakpoints.down('md')]: {
		display:"none"
	}
}))
const Image = styled('img')({
    height: 34,
    '&:last-child': {
        margin: '0 50px 0 20px'
    }
});

const Text = styled('p')`
	font-size:14px;
	font-weight:400;
	margin-left:50px;
	font-family:'Roboto',sans-serif;
`


const Header = () => {

	const appleStore = 'https://assets.inshorts.com/website_assets/images/appstore.png';
    const googleStore = 'https://assets.inshorts.com/website_assets/images/playstore.png';


	return (
		<Container>
			<Text>
			For the best experience use <b>inshorts</b> app on your smartphone
			</Text>
			<div style={{display:"flex", marginLeft:'auto'}}>
				<Image src={appleStore} alt="appleStore" />
				<Image src={googleStore} alt="appleStore" />
			</div>
		</Container>
	)
}


export default Header;