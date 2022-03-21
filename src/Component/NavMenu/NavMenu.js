import React from "react";
import {
  Container,
  Nav,
  Navbar,
  
} from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../Context/AuthProvider/useAuth";

const NavMenu = () => {
  const {user, LogOut, admin}= useAuth();
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand className="ms-3" href="/" >
         
            <span className="fw-bolder fs-4 text-primary"><ion-icon  name="medkit-outline"></ion-icon></span> <span className="fw-bolder fs-4 text-primary"> BD Hospital</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
          
              className=" me-auto my-2 my-lg-0 "
              style={{ maxHeight: "100px",marginLeft:'10%' }}
              navbarScroll
            >
             <Link className="fw-bolder d-block text-gray-800 hover:text-gray-400 duration-500 text-lg  ps-3 py-1" to="/">Home</Link>
             <Link className="fw-bolder  my-1  ps-3 d-block text-gray-800 hover:text-gray-400 duration-500 text-lg" to="/service">Service</Link>
             <Link className=" fw-bolder  my-1  ps-3 d-block text-gray-800 hover:text-gray-400 duration-500 text-lg" to="/about">About Us</Link>
             <Link className=" fw-bolder  my-1  ps-3 d-block text-gray-800 hover:text-gray-400 duration-500 text-lg" to="/contact">Contact Us</Link>
            </Nav>

            {
                user.email?
                
                  
         <div>
                    <div className="dropdown">
                    <button className="  btn  dropdown-toggle border " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="fas fa-columns"></i> DashBoard
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                      <li><Link className="dropdown-item fw-normal" to="#"> <i className="fas fa-user-circle"></i> Hi , {user.displayName}</Link></li>
                      {/* <li><Link className="dropdown-item" to="/manage">My Order</Link></li> */}
                      <li><Link className="dropdown-item" to="/payment">Pay </Link></li>
                      <li><Link className="dropdown-item" to="/review">Review</Link></li>
                      
                        
                      {
                          admin && <div>
                            <li><Link className="dropdown-item" to="/admin">Make Admin</Link></li>
                            <li><Link className="dropdown-item" to="/">Manage Service </Link></li>
                            <li><Link className="dropdown-item" to="/manageReviews">Manage Reviews </Link></li>
                            <li><Link className="dropdown-item" to="/addService">Add Service</Link></li>
                        </div>
                      }
                      
                      <li><Link  onClick={LogOut} className="dropdown-item fw-bolder " to="#">Log Out</Link></li>
                       </ul>
        </div>
                  </div>
                  :
                  <Link to="/login" className="btn bg-primary text-white btn-outline-primary mx-3">
                LogIn
              </Link>
              }
              

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavMenu;

// import React from "react";
// import { Link } from "react-router-dom";

// const NavMenu = () => {
//   //   let Links = [
//   //     { name: "HOME" },
//   //     { name: "SERVICE", link: "/" },
//   //     { name: "ABOUT", link: "/" },
//   //     { name: "BLOGS", link: "/" },
//   //     { name: "CONTACTS", link: "/" },
//   //   ];
//   return (
//     <div className="shadow-md w-full fixed top-0 left-0 ">
//       <div className=" md:flex items-center justify-between bg-white py-3 md:px-10 px-7">
//         <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800">
//           <span className="text-3xl text-indigo-600 mr-1 pt-2">
//             <ion-icon name="medkit-outline"></ion-icon>
//           </span>
//           BD Hospital
//         </div>

//         <ul className="flex  md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1]  ">
//           <li className=" flex-col text-xl menu_ul md:my-0 my-7   ">
//             <Link
//               className="   text-gray-800  md:flex-col hover:text-gray-400 duration-500 md:ml-8 "
//               to="/"
//             >
//               Home
//             </Link>
//           </li>
//           <li className=" flex-col text-xl menu_ul md:my-0 my-7" >
//             <Link
//               className=" d-block text-gray-800 hover:text-gray-400 duration-500 md:ml-8"
//               to="/"
//             >
//               Service
//             </Link>
//           </li>
//           <li className=" flex-col text-xl menu_ul md:my-0 my-7" >
//             <Link
//               className="text-gray-800 hover:text-gray-400 duration-500 md:ml-8"
//               to="/"
//             >
//               About Us
//             </Link>
//           </li>
//           <li className=" flex-col text-xl menu_ul md:my-0 my-7" >
//             <Link
//               className="text-gray-800 hover:text-gray-400 duration-500 md:ml-8"
//               to="/"
//             >
//               Contact Us
//             </Link>
//           </li>
//           <li className=" flex-col text-xl menu_ul md:my-0 my-7" >
//             <Link
//               to="/"
//               className="md:ml-8 bg-indigo-600 text-white  p-2 rounded hover:bg-indigo-400 duration-500  text-lg  "
//             >
//               <button>LogIn</button>
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default NavMenu;
