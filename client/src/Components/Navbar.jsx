import React from 'react';
import AppBar from '@mui/material/AppBar';
import { Toolbar,styled } from '@mui/material';
import {Menu} from '@mui/icons-material';

const Container = styled(AppBar)`
background:#fff;
height:70px;
`;

const ImageLogo = styled("img")`
	height:65px;
	margin:auto;
	padding-right:70px;

`


const Navbar = () =>{

	const url = 'https://assets.inshorts.com/website_assets/images/logo_inshorts.png';

	return (
		<Container position='static'>
			<Toolbar>
				<Menu color='error'/>
				<ImageLogo src={url} alt="logo" />
			</Toolbar>
		</Container>
	)
}

export default Navbar;