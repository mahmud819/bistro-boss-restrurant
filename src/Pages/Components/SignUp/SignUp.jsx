import React, { useContext } from "react";
import bgImage from "../../../assets/others/authentication.png";
import authenticImg from "../../../assets/others/authentication2.png";
import { data, Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../CustomHook/UseAxiosPublic/useAxiosPublic";
import ScocialMediaLogin from "../../../Shared/SharedComponent/ScocialMediaLogin/ScocialMediaLogin";
import { FaGoogle } from "react-icons/fa6";

const SignUp = () => {
  const { user, createUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email, password)
      .then((result) => {
        console.log(result?.user);
        // alert('user create successful')
        const userInfo= {
          name: form.name.value,
          email: form.email.value
        }
        // user inform storage in database
        axiosPublic.post('/users',userInfo)
        .then(res=>{
          console.log(res.data)
        })
        .catch(err=>{
          console.log(err)
        })

        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your account create successful",
          showConfirmButton: false,
          timer: 1500,
        });
        form.reset();
        navigate('/signIn')
      })
      .then((error) => {
        console.log(error);
      });

    // console.log(name, email, password);
  };
  // console.log(user);
  return (
    <div
      className="hero  min-h-screen"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold text-center">Sign Up now!</h1>

          <div>
            <img src={authenticImg} alt="" />
          </div>
        </div>
        {/* Sign Up form */}
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form action="" onSubmit={handleSignUp}>
            <div className="card-body">
              <fieldset className="fieldset">
                <label className="label">Name</label>
                <input
                  type="text"
                  className="input outline-none"
                  placeholder="Name"
                  name="name"
                />
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
                <button className="btn mt-4 bg-[#D99904] text-white font-bold">
                  Sign Up
                </button>
                <p className="text-center text-[#D98904]">
                  Already have an Account?{" "}
                  <Link to={"/signIn"} className="font-bold">
                    Sign In
                  </Link>
                </p>
              </fieldset>
            </div>
          </form>
          <div className="mx-auto pb-4">
            <ScocialMediaLogin buttonIcon={<FaGoogle className="text-[#D99904]"></FaGoogle>} buttonName={'Signup With Google'}></ScocialMediaLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
