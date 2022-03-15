import React from "react";
import { useForm } from "react-hook-form";
import {useHistory} from "react-router-dom"
import style from "../assets/css/global.style.css";

const onSubmit = (data) => { 
if(data.registerUsername&&data.registerPassword){
  alert('Registered')
  // .push("/Dashboard")
}
if(data.username===process.env.REACT_APP_ZTUSERNAME&&data.password===process.env.REACT_APP_ZTPASSWORD){
  alert('Login Success')
  window.location.href="/dashboard"
}
};
let groupClass = ["btn", "btn-dark", "btn-sm", "me-2", "my-2"];
let groupRegClass=["btn", "btn-outline-dark", "btn-sm", "my-2"];

// Login Button trigger
const LoginButton = (setSignIn, setRegister) => {
  setSignIn(true);
  setRegister(false);
  groupClass.push("removeC");
  groupRegClass.pop("removeC");
};

// Register Button trigger
const RegisterButton = (setRegister, setSignIn) => {
  setRegister(true);
  setSignIn(false);
  groupClass.pop("removeC");
  groupRegClass.push("removeC");
};

// Register Form
const RegisterUser = () => {
  // Register Styles
  const heading = {
    fontSize: "xxx-large",
    color: "black",
  };
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  return (
    <div className="slide-left">
          <form onSubmit={handleSubmit(onSubmit)}>
        <label style={heading}>Register</label>
        <br />
        <input
          defaultValue="username"
          className="signText"
          type="text"
          placeholder="UserName"
          {...register("registerUsername")}
        />
        <br />
        <input
          className="signText"
          type="password"
          placeholder="Password"
          {...register("registerPassword", { required: true })}
        />
        <br />
        <input type="submit" value="Get Access" className="btn btn-outline-dark btn-sm my-2" />
      </form>
    </div>
  );
};

// SignIn Form
const SignIn = () => {
  // SignIn Styles
  const heading = {
    fontSize: "xxx-large",
    color: "black",
  };
  // button replace

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  // submit code

  return (
    <div className="slide-left">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label style={heading}>Sign In</label>
        <br />
        <input
          defaultValue="username"
          className="signText"
          type="text"
          placeholder="UserName"
          {...register("username")}
        />
        <br />
        <input
          className="signText"
          type="password"
          placeholder="Password"
          {...register("password", { required: true })}
        />
        <br />
        <input type="submit" className="btn btn-dark btn-sm my-2" />
      </form>
    </div>
  );
};

// Default Message
const Welcome = () => {
  return (
    <h1 className="display-4 fs-2 fs-sm-4 fs-md-5  slide-left">
      <span className="overflow-hidden d-inline-block">
        <span
          className="d-inline-block"
          data-zanim-xs='{"delay":1}'
          style={{ transform: "translate(0px, 0px)", opacity: 1 }}
        >
          Bankify{" "}
        </span>
        <br />
        <span
          className="font-base fst-italic fw-normal"
          style={{ fontSize: 38 }}
        >
          All Banks one Solution
        </span>
      </span>
      <br />
    </h1>
  );
};

// Default execution
const Login = () => {
  const [signIn, setSignIn] = React.useState(false);
  const [registerPage, setRegisterPage] = React.useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  return (
    <main className="main min-vh-100" id="top">
      <section
        className="py-0 overflow-hidden bg-white"
        data-zanim-timeline='{"delay":0.4}'
      >
        <div className="container-fluid">
          <div className="devices-wrapper">
            <div
              className="macbook-1"
              data-zanim-xs='{"delay":0.5,"animation":"slide-left","duration":1.5}'
              style={{ transform: "translate(0px, 0px)", opacity: 1 }}
            >
              <img
                className="device"
                data-parallax="data-parallax"
                data-rellax-speed={3}
                src="./photos/macbook-1.jpg"
                alt=""
                style={{ transform: "translate3d(0px, 0px, 0px)" }}
              />
            </div>
            <div
              className="ipad--l-1"
              data-zanim-xs='{"delay":0.5,"animation":"slide-left","duration":1.5}'
              style={{ transform: "translate(0px, 0px)", opacity: 1 }}
            >
              <img
                className="device"
                data-parallax="data-parallax"
                data-rellax-speed="3.8"
                src="./photos/ipad--l-1.jpg"
                alt=""
                style={{ transform: "translate3d(0px, 0px, 0px)" }}
              />
            </div>
            <div
              className="iphone-1"
              data-zanim-xs='{"delay":0.4,"animation":"slide-left","duration":1.5}'
              style={{ transform: "translate(0px, 0px)", opacity: 1 }}
            >
              <img
                className="device"
                data-parallax="data-parallax"
                data-rellax-speed="4.8"
                src="./photos/iphone-1.jpg"
                alt=""
                style={{ transform: "translate3d(0px, 0px, 0px)" }}
              />
            </div>
            <div
              className="ipad--l-2"
              data-zanim-xs='{"delay":0.3,"animation":"slide-left","duration":1.5}'
              style={{ transform: "translate(0px, 0px)", opacity: 1 }}
            >
              <img
                className="device"
                data-parallax="data-parallax"
                data-rellax-speed="3.4"
                src="./photos/ipad--l-2.jpg"
                alt=""
                style={{ transform: "translate3d(0px, 0px, 0px)" }}
              />
            </div>
            <div
              className="iphone-2"
              data-zanim-xs='{"delay":0.2,"animation":"slide-left","duration":1.5}'
              style={{ transform: "translate(0px, 0px)", opacity: 1 }}
            >
              <img
                className="device"
                data-parallax="data-parallax"
                data-rellax-speed={4}
                src="./photos/iphone-2.jpg"
                alt=""
                style={{ transform: "translate3d(0px, 0px, 0px)" }}
              />
            </div>
            <div
              className="macbook-2"
              data-zanim-xs='{"delay":0.4,"animation":"slide-left","duration":1.5}'
              style={{ transform: "translate(0px, 0px)", opacity: 1 }}
            >
              <img
                className="device"
                data-parallax="data-parallax"
                data-rellax-speed={5}
                src="./photos/macbook-2.jpg"
                alt=""
                style={{ transform: "translate3d(0px, 0px, 0px)" }}
              />
            </div>
            <div
              className="ipad--l-3"
              data-zanim-xs='{"delay":0.5,"animation":"slide-left","duration":1.5}'
              style={{ transform: "translate(0px, 0px)", opacity: 1 }}
            >
              <img
                className="device"
                data-parallax="data-parallax"
                data-rellax-speed="3.7"
                src="./photos/ipad--l-3.jpg"
                alt=""
                style={{ transform: "translate3d(0px, 0px, 0px)" }}
              />
            </div>
            <div
              className="ipad--p-1"
              data-zanim-xs='{"delay":0.5,"animation":"slide-left","duration":1.5}'
              style={{ transform: "translate(0px, 0px)", opacity: 1 }}
            >
              <img
                className="device"
                data-parallax="data-parallax"
                data-rellax-speed="4.8"
                src="./photos/ipad--p-1.jpg"
                alt=""
                style={{ transform: "translate3d(0px, 0px, 0px)" }}
              />
            </div>
            <div
              className="iphone-3"
              data-zanim-xs='{"delay":0.3,"animation":"slide-left","duration":1.5}'
              style={{ transform: "translate(0px, 0px)", opacity: 1 }}
            >
              <img
                className="device"
                data-parallax="data-parallax"
                data-rellax-speed={3}
                src="./photos/iphone-3.jpg"
                alt=""
                style={{ transform: "translate3d(0px, 0px, 0px)" }}
              />
            </div>
            <div
              className="iphone-4"
              data-zanim-xs='{"delay":0.2,"animation":"slide-left","duration":1.5}'
              style={{ transform: "translate(0px, 0px)", opacity: 1 }}
            >
              <img
                className="device"
                data-parallax="data-parallax"
                data-rellax-speed={3}
                src="./photos/iphone-2.jpg"
                alt=""
                style={{ transform: "translate3d(0px, 0px, 0px)" }}
              />
            </div>
            <div
              className="iphone--l-1"
              data-zanim-xs='{"delay":0.5,"animation":"slide-left","duration":1.5}'
              style={{ transform: "translate(0px, 0px)", opacity: 1 }}
            >
              <img
                className="device"
                data-parallax="data-parallax"
                data-rellax-speed={2}
                src="./photos/iphone--l-1.jpg"
                alt=""
                style={{ transform: "translate3d(0px, 0px, 0px)" }}
              />
            </div>
          </div>

          <div className="row py-8 min-vh-100 align-items-center">
            <div className="col-md-auto px-md-4 ps-md-8">
              {signIn ? (
                <SignIn />
              ) : registerPage ? (
                <RegisterUser />
              ) : (
                <Welcome />
              )}

              <div className="mt-3 mt-sm-5">
                <a
                  className={groupClass.join(" ")}
                  onClick={() => LoginButton(setSignIn, setRegisterPage)}
                  data-offset={60}
                  data-zanim-xs='{"delay":1.3}'
                  style={{ transform: "translate(0px, 0px)", opacity: 1 }}
                >
                  Login
                </a>

                <a
                  className={groupRegClass.join(" ")}
                  onClick={() => RegisterButton(setRegisterPage, setSignIn)}
                  target="_blank"
                  data-zanim-xs='{"delay":1.3}'
                  style={{ transform: "translate(0px, 0px)", opacity: 1 }}
                >
                  Register ⟶
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Login;
