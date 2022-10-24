import './App.css';
import {Button, Typography} from '@mui/material';
import ResponsiveAppBar from './components/NavBar/Navbar';
import HomepageCont from './components/HomepageCont/HomepageCont';

function App() {
  return (
    <div className="App scroller">
      <HomepageCont></HomepageCont>
      <HomepageCont></HomepageCont>
      {/* <Typography variant='h4'>This is my app</Typography>
        <Typography variant='myVariant'>Body typography</Typography>
        <Button sx={{}} color='secondary' variant='contained'>Hello World</Button> */}
    </div>
  );
}

export default App;
