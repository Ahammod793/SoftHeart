import React, { useContext, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Auth/AuthProvider";
import Swal from "sweetalert2";

export default function Login() {
  const {loginWithEmailPass, setUser} = useContext(AuthContext)
  const navigate = useNavigate()
    const formRef = useRef()
    const loginButton = (e) => {
        e.preventDefault()
        const form = formRef.current
        const email = form.email.value;
        const pass = form.password.value;
        loginWithEmailPass(email, pass)
        .then(res => {
          console.log(res)
          setUser(res.user.displayName)
          Swal.fire({
            title: "SignUp Success!",
            icon: "success",
            draggable: true
          })
          .then(()=>{
            navigate("/");
            console.log(user);
          })
        })
        
        .catch(err =>{
        })
      }
      
    const forgatePass = (e) => {
        e.preventDefault()
    }
  return (
    <><div>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form className="card-body" ref={formRef}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              name="password"
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a
                href="#"
                className="label-text-alt link link-hover"
                onClick={forgatePass}
              >
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-secondary" onClick={loginButton}>Login</button>
          </div>
        </form>
        {
        /* {error  */}
        {/* &&  */}
        <p className="text-[12px] font-light h-4 text-red-700 w-full">
            {/* {error} */}
            </p>
        
      </div>
      <h3 className="text-black font-semibold items-center text-center py-4"> Create new account</h3>
            <Link to='soft_heart_register'><button className="btn btn-success">Register</button></Link>
        </div>  
    </>
  );
}
