import React, { useContext, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Auth/AuthProvider";
import Swal from "sweetalert2";
import { FaGithub } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

export default function Login() {
  const {
    loginWithEmailPass,
    loginWithGoogle,
    loginWithGitHub,
    setUserName,
    setUserEmail,
    setUserImage,
    setUser,
  } = useContext(AuthContext);
  const navigate = useNavigate();
  const [resErr, setResErr] = useState(null);
  const formRef = useRef();
  const location = useLocation()

  const loginButton = (e) => {
    e.preventDefault();
    const form = formRef.current;
    const email = form.email.value;
    const pass = form.password.value;
    loginWithEmailPass(email, pass)
      .then((res) => {
        // console.log(res);
        setUser(res.user);
        Swal.fire({
          title: "SignUp Success!",
          icon: "success",
          draggable: true,
        }).then(() => {
          navigate(location.state ? location.state : "/");
          // console.log(user);
        });
      })

      .catch((err) => {
        console.log(err);
        setResErr(err.code);
      });
  };
  const googleLogin = () => {
    loginWithGoogle()
      .then((res) => {
        console.log(res);
        setUser(res.user);
        Swal.fire({
          title: "SignUp Success!",
          icon: "success",
          draggable: true,
        }).then(() => {
          navigate(location.state ? location.state : "/");
          // console.log(user);
        });
      })
      .catch((err) => {
        console.log(err);
        setResErr(err.code);
      });
  };
  // .then((result) => {
  //   // This gives you a GitHub Access Token. You can use it to access the GitHub API.
  //   const credential = GithubAuthProvider.credentialFromResult(result);
  //   const token = credential.accessToken;

  //   // The signed-in user info.
  //   const user = result.user;
  //   // IdP data available using getAdditionalUserInfo(result)
  //   // ...
  // })
  const githubLogin = () => {
    loginWithGitHub()
      .then((res) => {
        console.log(res);
        setUser(res.user);
        Swal.fire({
          title: "SignUp Success!",
          icon: "success",
          draggable: true,
        }).then(() => {
          navigate(location.state ? location.state : "/");
          // console.log(user);
        });
      })
      .catch((err) => {
        // Handle Errors here.
        const errorCode = err.code;
        const errorMessage = err.message;
        // The email of the user's account used.
        const email = err.customData.email;
        // The AuthCredential type that was used.
        // const credential = GithubAuthProvider.credentialFromError(err);
        // ...
        console.log(
          errorMessage,
          "code ",
          errorCode,
          "email ",
          email,
          "credential "
        );
        setResErr(err.code);
      });
  };
  const forgatePass = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div>
        <div className="p-4 flex flex-col gap-4 items-center justify-center ">
          <button
            onClick={googleLogin}
            className="m-1 p-2 w-full shadow-xl    font-medium text-2xl border border-black rounded-md flex items-center justify-center hover:bg-slate-400"
          >
            <FcGoogle></FcGoogle> &nbsp;Google
          </button>
          <button
            onClick={githubLogin}
            className="m-1 p-2 w-full shadow-xl    font-medium text-2xl border border-black rounded-md flex items-center justify-center hover:bg-slate-400"
          >
            <FaGithub></FaGithub> &nbsp;GitHub
          </button>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form
            className="card-body"
            ref={formRef}
            onChange={() => setResErr(null)}
          >
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
            <div className="text-[12px] font-light h-4 text-red-700 w-full">
              {resErr}
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-secondary" onClick={loginButton}>
                Login
              </button>
            </div>
          </form>
          {/* {error  */}
          {/* &&  */}
          <p className="text-[12px] font-light h-4 text-red-700 w-full">
            {/* {error} */}
          </p>
        </div>
        <h3 className=" font-semibold items-center text-center py-4">
          {" "}
          Create new account
        </h3>
        <Link to="soft_heart_register" state={location?.state && location?.state}>
          <button className="btn btn-success">Register</button>
        </Link>
      </div>
    </>
  );
}
