import React, { useContext, useId, useState } from "react";
import { useForm } from "react-hook-form";
import img from "../../assets/authentication2.png";
import { authContext } from "../../provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import Btn from "../../Components/Btn/Btn";

const Register = () => {
  const axiosPublic = useAxiosPublic();
  const { createUser, profile } = useContext(authContext);
  const navigate = useNavigate();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isError, setIsError] = useState(true);

  const onSubmit = (data) => {
    createUser(data.email, data.password).then((res) => {
      console.log(res.user);

      const userInfo = {
        name: data.name,
        email: data.email,
      };
      profile(data.name).then(() => {
        axiosPublic.post("/users", userInfo).then((res) => {
          if (res.data.insertedId) {
            reset();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "user created succesfully",
              showConfirmButton: false,
              timer: 1500,
            });
            navigate("/");
          }
        });
      });
    })
    .catch(err => {
      setIsError(err.message)
    })
  };

  // const handleRegister = (e) => {
  //   e.preventDefault();
  //   const form = e.target;
  //   const name = form.name.value;
  //   const email = form.email.value;
  //   const password = form.password.value;

  //   createUser(email, password).then((res) => {
  //     console.log(res.user);
  //   });
  // };

  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <img src={img} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  {...register("name", { required: true })}
                  placeholder="Name"
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-600">Name is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  {...register("email", { required: true })}
                  placeholder="email"
                  className="input input-bordered"
                />

                {isError && (
                  <span className="text-red-600">
                    {isError}
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  {...register("password", {
                    required: true,
                    // minLength: 6,
                    // maxLength: 20,
                    pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/,
                  })}
                  placeholder="password"
                  className="input input-bordered"
                />
                {/* {errors.password?.type === "minLength" && (
                  <p className="text-red-600">Pass must be 6 character</p>
                )} */}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-600">
                    Minimum six characters, at least one uppercase letter, one
                    lowercase letter and one number: :
                  </p>
                )}
                {/* {errors.password?.type === "maxLength" && (
                  <p className="text-red-600">Pass must be less 20 character</p>
                )} */}
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Register
                </button>
              </div>
              <p>
                Create New Account? <Link to="/login">Login</Link>{" "}
              </p>
              <Btn />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
