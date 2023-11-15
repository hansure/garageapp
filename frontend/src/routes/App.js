// import '../App.css';
import Home from '../pages/Home';
import { Route, Routes } from 'react-router-dom'
import Login from '../pages/Login';
import AddEmployee from '../pages/admin/AddEmployee';
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import TopHeader from '../components/Header/TopHeader';
function App() {
  return (
    <>
    <TopHeader/>
    <Header/>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/login' element={<Login/>}/>
          <Route exact path='/admin/add-employee' element={<AddEmployee/>}/>
        </Routes>
        <Footer/>
    </>
  );
}

export default App;
