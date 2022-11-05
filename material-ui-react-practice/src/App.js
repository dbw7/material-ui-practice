import './App.css';
import Navbar from './components/NavBar/Navbar';
//import HomepageCont from './components/HomepageCont/HomepageCont';
import TestHP from './components/HomepageCont/TestHP/TestHP';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login/Login';
import Footer from './components/HomepageCont/Footer/Footer';
import ErrorPage from './pages/Error/ErrorPage';
import Dashboard from './pages/dashboard/Dashboard';
import { useContext } from 'react';
import About from './pages/About/About';
import AuthContext from './context/auth-context';
function App() {
  const authCtx = useContext(AuthContext);
  console.log(authCtx.token)
  return (
    <div>
      <header>
        <Navbar></Navbar> 
      </header>
      <Routes>
        <Route path='/' element={<TestHP></TestHP>} />
        <Route path='/about' element={<About></About>} />
        <Route path='/login' element={<Login></Login>} />
        {authCtx.isLoggedIn ? <Route path='/dashboard' element={<Dashboard></Dashboard>} /> : <Route path='/dashboard' element={<Navigate to='/login'></Navigate>} />}
        <Route path="/*" element={<ErrorPage></ErrorPage>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;