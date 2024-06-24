// import '../App.css';
import Home from '../pages/Home';
import { Route, Routes } from 'react-router-dom'
import Login from '../pages/Login';
import Contact from '../pages/Contact'
import AddEmployee from '../pages/admin/AddEmployee';
import Admin from '../pages/admin/Admin';
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import TopHeader from '../components/Header/TopHeader';
import Unauthorized from '../components/Error/Unauthorized'
import About from '../pages/About';
import Service from '../pages/Service';
import { OrderDetails } from '../pages/OrderDetails';
import ListOfCustomer from '../pages/admin/ListOfCustomer';
import EmployeeList from '../pages/admin/EmployeeList';
import CustomerProfilePage from '../pages/admin/CustomerProfilePage';
import ServiceManage from '../pages/admin/ServiceManage';
import AddCustomer from '../pages/admin/AddCustomer'
import MySchedule from '../pages/MySchedule';
import Orders from '../pages/admin/Orders/Orders';
import PrivateAuthRoute from '../components/Auth/PrivateAuthRoute'
function App() {
  return (
    <>
    <TopHeader/>
    <Header/>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/my-schedule' element={<MySchedule/>}/>
          <Route exact path='/login' element={<Login/> }/>
          <Route path='/unauthorized' element={<Unauthorized/>}/>
          <Route exact path='/contact-us' element={<Contact/>}/>
          <Route exact path='/about-us' element={<About/>}/>
          <Route exact path='/Services' element={<Service/>}/>
          <Route exact path='/order-details' element={<PrivateAuthRoute roles={[1,2,3]}><OrderDetails/></PrivateAuthRoute>}/>
          <Route exact path='/admin/dashboard' element={<PrivateAuthRoute roles={[1]}><Admin/></PrivateAuthRoute>}/>
          <Route exact path='/admin/add-employee' element={<PrivateAuthRoute roles={[1,2,3]}><AddEmployee /> </PrivateAuthRoute>}/>
          <Route exact path='/admin/orders/view-orders' element={<PrivateAuthRoute roles={[1,2,3]}><Orders/></PrivateAuthRoute>}/>
          <Route exact path='/admin/view-customers' element={<PrivateAuthRoute roles={[2,3]}><ListOfCustomer/></PrivateAuthRoute>}/>
          <Route exact path='/admin/employees' element={<PrivateAuthRoute roles={[2,3]}><EmployeeList/></PrivateAuthRoute>}/>
          <Route exact path='/admin/services' element={<PrivateAuthRoute roles={[1, 2,3]}><ServiceManage/></PrivateAuthRoute>}/>
          <Route exact path='/admin/customers' element={<PrivateAuthRoute roles={[1, 2,3]}><ListOfCustomer/></PrivateAuthRoute>}/>
          <Route exact path='/admin/add-customer' element={<PrivateAuthRoute roles={[1, 2,3]}><AddCustomer/></PrivateAuthRoute>}/>
          <Route exact path='/admin/orders' element={<PrivateAuthRoute roles={[1, 2,3]}><Orders/></PrivateAuthRoute>}/>
        </Routes>
        <Footer/>
    </>
  );
}

export default App;
