import React, { useEffect, useState } from "react";
import bgImage from "../../../assets/others/authentication.png";
import authenticImg from "../../../assets/others/authentication2.png";
import { Link } from "react-router-dom";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa6";
import {
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  loadCaptchaEnginge,
  validateCaptcha,
} from "react-simple-captcha";

const SignIn = () => {

  const [signInErr,setSignInErr]=useState('');

   useEffect(()=>{
    loadCaptchaEnginge(6);
   },[])
  const handleSignIn = (e) => {
    
    e.preventDefault();
    const form = e.target;

    
    const email = form.email.value;
    const password = form.password.value;
    const captcha = form.captcha.value;

    if(validateCaptcha(captcha)===true){
      // alert('captcha is matched')
      setSignInErr('');
    }
    else{
      // alert("captcha doesn't match")
      setSignInErr("Captcha doesn't match,Try again")
    }
    console.log(email,password,captcha);
    
  };
  return (
    <div
      className="hero  min-h-screen"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
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
            <form action="" onSubmit={handleSignIn}>
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input
                  type="email"
                  className="input outline-none"
                  placeholder="Email"
                  name="email"
                />
                <label className="label">Password</label>
                <input
                  type="password"
                  className="input outline-none"
                  placeholder="Password"
                  name="password"
                />
                <input
                  type="text"
                  className="input outline-none"
                  placeholder="Write here below Captcha"
                  name="captcha"
                />
                <LoadCanvasTemplate />
                {/* <LoadCanvasTemplateNoReload /> */}

                {signInErr&&<p className="text-red-600 fond-bold">{signInErr}</p>}
                <button
                  
                  className="btn mt-4 bg-[#D99904] text-white font-bold"
                >
                  Sign In
                </button>
                <p className="text-center text-[#D98904]">
                  Don't have any Account?{" "}
                  <Link to="/signUp" className="font-bold">
                    Register Here
                  </Link>
                </p>
                <p className="text-center font-bold ">Or</p>
              </fieldset>
            </form>
            <div className="flex text-lg justify-center items-center">
              <FaFacebook className=""></FaFacebook>
              <FaGoogle className="ml-6"></FaGoogle>
              <FaGithub className="ml-6"></FaGithub>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
