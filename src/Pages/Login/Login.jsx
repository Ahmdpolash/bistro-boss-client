import React, { useContext, useEffect, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import authImg from "../../assets/authentication2.png";
import { authContext } from "../../provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Btn from "../../Components/Btn/Btn";

const Login = () => {
  const { signIn } = useContext(authContext);
  const navigate = useNavigate();
  const location = useLocation();

  const [disabled, setDisabled] = useState(true);

  const handleCaptchaValidate = (e) => {
    const user_captcha_value = e.target.value;

    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };



  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password).then((res) => {
      console.log(res.user);
      Swal.fire({
        title: "Good job!",
        text: "Login Successfully!",
        icon: "success",
      });
      navigate(location.state ? location?.state : "/");
    });
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control">
                <LoadCanvasTemplate />
                <input
                  type="text"
                  name="captcha"
                  onBlur={handleCaptchaValidate}
                  placeholder="Captcha"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <button
                  disabled={disabled}
                  type="submit"
                  className="btn btn-primary"
                >
                  Login
                </button>
              </div>
              <p>
                Create New Account? <Link to="/register">Register</Link>{" "}
              </p>
              <Btn />
            </form>
          </div>
          <div className="text-center lg:text-left">
            <img src={authImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
