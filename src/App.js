import "./App.css";
import Home from "./Component/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Component/Login/Login";
import Register from "./Component/Register/Register";
import AuthProvider from "./Context/AuthProvider/AuthProvider";
import Booking from "./Component/BookingService/Booking";
import Makeadmin from "./Component/Makeadmin/Makeadmin";
import PrivetRoute from "./Component/PrivetRoute/PrivetRoute";
import AdminRoute from "./Component/AdminRoute/AdminRoute";
import AddService from "./Component/AddService/AddService";
import Payment from "./Component/Payment/Payment";
import Review from "./Component/Review/Review";
import ManageReviews from "./Component/ManageReviews/Managereviews"
import Footer from "./Component/Footer/Footer";
import Services from "./Component/Service/Services";
import NavMenu from "./Component/NavMenu/NavMenu";
import ContactUs from "./Component/ContactUs/ContactUs";
import AboutUs from "./Component/AboutUs/AboutUs";
import ManageService from "./Component/ManageService/ManageService";



// import your route components too

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
        <NavMenu></NavMenu>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/contact" element={<ContactUs />}></Route>
            <Route path="/about" element={<AboutUs />}></Route>
            <Route path="/payment" element={<Payment />}></Route>
            <Route path="/service" element={<Services />}></Route>
            <Route path="/booking/:BookingId" element={<PrivetRoute><Booking/></PrivetRoute>}></Route>
            <Route path="/review" element={<PrivetRoute><Review/></PrivetRoute>}></Route>
            <Route path="/admin" element={<AdminRoute><Makeadmin/></AdminRoute>}></Route>
            <Route path="/manageService" element={<AdminRoute><ManageService/></AdminRoute>}></Route>
            <Route path="/manageReviews" element={<AdminRoute><ManageReviews/></AdminRoute>}></Route>
            <Route path="/addService" element={<AddService/>}></Route>
          </Routes>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
      ,
    </div>
  );
}

export default App;
