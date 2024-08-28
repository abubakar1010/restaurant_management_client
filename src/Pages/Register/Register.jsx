import { Card, Input, Checkbox, Typography } from "@material-tailwind/react";
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { updateProfile } from "firebase/auth";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import auth from "../../Firebase/Firebase.config";
import loginImg from "../../assets/login.svg";
import { Helmet } from "react-helmet-async";

const Register = () => {
  const { register, user, setUserData } = useContext(AuthContext);

  const [isShowPassword, setIsShowPassword] = useState(false);
  const navigate = useNavigate();
  const imgURL = "https://accounts.pwskills.com/images/signin-banner.svg";
  const location = useLocation();

  // //console.log(register);

  const handleShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const accepted = e.target.terms.checked;

    //console.log("checkbox",accepted);

    if (password.length < 6) {
      toast.warn("Password must be at least 6 characters long.");
      return;
    } else if (!/^(?=.*[A-Z])/.test(password)) {
      toast.warn("Password must contain at least one uppercase letter");
      return;
    } else if (!/^(?=.*[a-z])/.test(password)) {
      toast.warn("Password must contain at least one lowercase letter");
      return;
    } else if (!accepted) {
      toast.warn("Please accept the terms and conditions before proceeding.");
      return;
    }

    register(email, password)
      .then(() => {
        // update user profile
        updateProfile(auth.currentUser, {
          displayName: `${name}`,
          photoURL: `${photo}`,
        })
          .then(() => {
            toast.success("Congratulations! You've successfully registered.");

            setTimeout(() => {
              navigate(location?.state ? location.state : "/");
            }, 1200);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        toast.error(
          `Oops! Registration failed. Please check your information and try again.`
        );
        console.log(error);
      });
  };

  setUserData(user);
  // //console.log(auth.currentUser);

  return (
    <>
    <Helmet>
        <title>Cooking | Register</title>
      </Helmet>
      <div className="flex h-full w-full gap-24">
        <div>
          <img
            className="object-cover h-[64%] w-[900px]"
            src={imgURL || loginImg}
            alt=""
          />
        </div>
        <div className=" my-12">
          <Card color="transparent" shadow={false}>
            <Typography variant="h4" color="blue-gray">
              Sign Up
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              Nice to meet you! Enter your details to register.
            </Typography>
            <form
              onSubmit={handleSubmit}
              className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
            >
              <div className="mb-1 flex flex-col gap-6">
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Your Name
                </Typography>
                <Input
                  size="lg"
                  placeholder="name"
                  name="name"
                  type="text"
                  required
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Photo URL
                </Typography>
                <Input
                  size="lg"
                  placeholder="Photo URL"
                  name="photo"
                  required
                  type="text"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Your Email
                </Typography>
                <Input
                  size="lg"
                  type="email"
                  name="email"
                  required
                  placeholder="name@mail.com"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                <div className=" relative ">
                  <Typography variant="h6" color="blue-gray" className="mb-3">
                    Password
                  </Typography>
                  <Input
                    type={isShowPassword ? "text" : "password"}
                    name="password"
                    required
                    size="lg"
                    placeholder="********"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
                  <div
                    onClick={handleShowPassword}
                    className="absolute top-[50px] right-6"
                  >
                    {isShowPassword ? (
                      <FaEyeSlash className=" text-xl" />
                    ) : (
                      <FaEye className=" text-xl" />
                    )}
                  </div>
                </div>
              </div>
              <Checkbox
                name="terms"
                label={
                  <Typography
                    variant="small"
                    color="gray"
                    className="flex items-center font-normal"
                  >
                    I agree the
                    <a
                      href="#"
                      className="font-medium transition-colors hover:text-gray-900"
                    >
                      &nbsp;Terms and Conditions
                    </a>
                  </Typography>
                }
                containerProps={{ className: "-ml-2.5" }}
              />
              <button
                type="submit"
                className="mt-6 bg-gradient-to-r from-[#d0a260] to-[#c79c60da]  w-full py-3 rounded-lg font-bold text-white  text-xl"
              >
                sign up
              </button>
              <Typography color="gray" className="mt-4 text-center font-normal">
                Already have an account?{" "}
                <Link
                  to={"/login"}
                  className="font-medium text-[#ff5d64ed] hover:underline "
                >
                  Sign In
                </Link>
              </Typography>
            </form>
          </Card>
        </div>
      </div>
      <ToastContainer autoClose={1000} />
    </>
  );
};

export default Register;
