import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Navbar = () => {

  const{user,userLogOut,setLoading}=useContext(AuthContext);


  const handleSignOut =()=>{

    userLogOut()
    .then((res)=>{
      console.log(res);
    })
    .catch((err)=>{
      console.log(err)
    })
    console.log('inside handle sign out function')
  }
  const menuList = 
    <>
      <li>
        <Link to={'/'}>Home</Link>
      </li>
      <li>
        <Link to={'/contactUs'} >Contact Us</Link>
      </li>
      <li>
        <Link to={'dashBoard'} >DashBoard</Link>
      </li>
      <li>
        <Link to={'/ourMenu'} >Our Menu</Link>
      </li>
      <li>
        <Link to={'/ourShop'} >Our Shop</Link>
      </li>
      {user?<>
        <li>
        <Link onClick={handleSignOut} >Sign Out</Link>
      </li>
      </>:<>
        <li>
        <Link to={'/signIn'} >Sign In</Link>
      </li>
      <li>
        <Link to={'/signUp'} >Sign Up</Link>
      </li>
      </>}
    
    
    </>
  
  console.log(user);
  return (
    <div>
      <div className="navbar fixed top-0 w-full z-50 shadow-sm text-white backdrop-blur-md ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {menuList}
            </ul>
          </div>
          <a className="btn btn-ghost ">
            <div className="uppercase">
              <h3 className="text-xl font-bold">Bistro Boss</h3>
              <p className="text-sm tracking-[0.30em]">Restrurent</p>
              {/* <p className="bg-white/10 bg-transparent">demo</p> */}
            </div>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {menuList}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
