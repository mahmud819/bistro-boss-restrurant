import React from "react";
import bgImage from '../../../assets/others/authentication.png'
import authenticImg from '../../../assets/others/authentication2.png'
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="hero  min-h-screen" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold text-center">Sign Up now!</h1>
          
          <div>
            <img src={authenticImg} alt="" />
          </div>
        </div>
        {/* Sign Up form */}
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <fieldset className="fieldset">
              <label className="label">Name</label>
              <input type="text" className="input outline-none" placeholder="Name" />
              <label className="label">Email</label>
              <input type="email" className="input outline-none" placeholder="Email" />
              <label className="label">Password</label>
              <input type="password" className="input outline-none" placeholder="Password" />
              <button className="btn mt-4 bg-[#D99904] text-white font-bold">Sign Up</button>
              <p className="text-center">Already have an Account? <Link className="font-bold">Sign In</Link></p>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
