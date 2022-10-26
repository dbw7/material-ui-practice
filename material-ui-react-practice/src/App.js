import './App.css';
import Navbar from './components/NavBar/Navbar';
import HomepageCont from './components/HomepageCont/HomepageCont';
import TestHP from './components/HomepageCont/TestHP/TestHP';
import Reviews from './components/HomepageCont/Reviews/Reviews';

function App() {
  return (
    <div className="App scroller">
      <header>
        <Navbar></Navbar> 
      </header>
      <TestHP></TestHP>
      <Reviews></Reviews>
      {/* <Typography variant='h4'>This is my app</Typography>
        <Typography variant='myVariant'>Body typography</Typography>
        <Button sx={{}} color='secondary' variant='contained'>Hello World</Button> */}
    </div>
  );
}

export default App;
