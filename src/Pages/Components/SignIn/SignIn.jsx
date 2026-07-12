import React from 'react';
import bgImage from '../../../assets/others/authentication.png'
import authenticImg from '../../../assets/others/authentication2.png'
import { Link } from "react-router-dom";
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa6';

const SignIn = () => {
    return (
        <div className="hero  min-h-screen" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold text-center">Sign In Now!</h1>
          
          <div>
            <img src={authenticImg} alt="" />
          </div>
        </div>
        {/* Sign Up form */}
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input type="email" className="input outline-none" placeholder="Email" />
              <label className="label">Password</label>
              <input type="password" className="input outline-none" placeholder="Password" />
              <input type="text" className="input outline-none" placeholder="" />
              <button className="btn mt-4 bg-[#D99904] text-white font-bold">Sign In</button>
              <p className="text-center text-[#D98904]">Don't have any Account? <Link to='/signUp' className="font-bold">Register Here</Link></p>
              <p className='text-center font-bold '>Or</p>
            </fieldset>
            <div className='flex text-lg justify-center items-center'>
                <FaFacebook className=''></FaFacebook>
                <FaGoogle className='ml-6'></FaGoogle>
                <FaGithub className='ml-6'></FaGithub>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default SignIn;