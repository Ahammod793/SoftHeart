import React, { useContext, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Auth/AuthProvider";
import { updateProfile } from "firebase/auth";
import { auth } from "../FireBase/firebase.config";
import Swal from "sweetalert2";
export default function Register() {
  const [invalidInputPass, setInvalidInputPass] = useState(null);
  const [resErr, setResErr] = useState(null);
  const formRef = useRef();
  const { newUserWithEmailPass, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const registerHunlder = (e) => {
    e.preventDefault();
    const form = formRef.current;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const profilePic = form.profile.value;
    // const userinfo = { name, profilePic };
    const regex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!regex.test(password)) {
      setInvalidInputPass(
        "6 length and UpperCase, Lowercase password required"
      );
      return;
    }
    newUserWithEmailPass(email, password)
      .then((userResult) => {
        const user = userResult.user;
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: profilePic,
        }).then(() => {
          setUser(user.displayName ? name : user.email)
        });
        Swal.fire({
          title: "SignUp Success!",
          icon: "success",
          draggable: true
        })
        .then(()=>{
        navigate("/");
        console.log(user);
      }
      )
      })
      .catch((err) => {
        console.log(err.code);
        setResErr(err.code);
      });
  };
  return (
    <div className="w-[340px]">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl ">
        <form
          className="card-body pt-2 "
          ref={formRef}
          onChange={() => setInvalidInputPass(null)}
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Profile Image Url</span>
            </label>
            <input
              name="profile"
              type="text"
              placeholder="Profile Image Url"
              className="input input-bordered"
              required
            />
          </div>
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
            <div className="text-[12px] font-light h-4 text-red-700 w-full">
              {invalidInputPass}
            </div>
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-secondary" onClick={registerHunlder}>
              Register
            </button>
          </div>
        </form>
        <div className="text-[12px] font-light h-4 text-red-700 w-full">
          {resErr}
        </div>
      </div>

      <h4 className="text-black font-semibold items-center text-center py-4">
        Already Have an Account?
      </h4>
      <Link to={"/soft_heart_register_accessPage"}>
        <button className="btn btn-success">Login</button>
      </Link>
    </div>
  );
}
