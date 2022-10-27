import './App.css';
import Navbar from './components/NavBar/Navbar';
import HomepageCont from './components/HomepageCont/HomepageCont';
import TestHP from './components/HomepageCont/TestHP/TestHP';
import Reviews from './components/HomepageCont/Reviews/Reviews';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Footer from './components/HomepageCont/Footer/Footer';
import ErrorPage from './pages/Error/ErrorPage';
import Dashboard from './pages/dashboard/Dashboard';
function App() {
  return (
    <div>
      <header>
        <Navbar></Navbar> 
      </header>
      <Routes>
        <Route path='/' element={<TestHP></TestHP>} />
        <Route path='/login' element={<Login></Login>} />
        <Route path='/dashboard' element={<Dashboard></Dashboard>} />
        <Route path="/*" element={<ErrorPage></ErrorPage>}></Route>
      </Routes>
      <Footer></Footer>
      {/* <Typography variant='h4'>This is my app</Typography>
        <Typography variant='myVariant'>Body typography</Typography>
        <Button sx={{}} color='secondary' variant='contained'>Hello World</Button> */}
    </div>
  );
}

export default App;