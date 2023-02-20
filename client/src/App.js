import './App.css';
import { styled } from '@mui/material';

//components

import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Articles from './Components/Articles';

const Container = styled('div')(({theme})=>({
    width : "60%",
    margin : "40px auto 0 auto",
    [theme.breakpoints.down('md')]:{
      width:"75%"
    },
    [theme.breakpoints.down('sm')]: {
      width:'85%'
    }
  }))


function App() {
  return (
    <div>
      <Navbar />
      <Container>
          <Header />
          <Articles />
      </Container>
    </div>
  );
}

export default App;
