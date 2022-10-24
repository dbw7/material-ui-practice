import logo from './logo.svg';
import './App.css';
import {Button, Typography} from '@mui/material';
import ResponsiveAppBar from './components/Navbar';

function App() {
  return (
    <div className="App">
    <ResponsiveAppBar></ResponsiveAppBar>
      <header className="App-header">
      <Typography variant='h4'>This is my app</Typography>
      <Typography variant='myVariant'>Body typography</Typography>
      <Button sx={{}} color='secondary' variant='contained'>Hello World</Button>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
