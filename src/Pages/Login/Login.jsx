import { Card, Input, Typography } from "@material-tailwind/react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash, FaGithub } from "react-icons/fa6";
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import loginImg from '../../assets/login.svg'

const Login = () => {
  const { login, googleLogin, githubLogin, setUserData, user, setLoading } =
    useContext(AuthContext);
    

  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();

  const [isShowPassword, setIsShowPassword] = useState(false);

  const location = useLocation();
  // console.log("location state", location);

  //console.log(location);

  const imgURL = 'https://accounts.pwskills.com/images/signin-banner.svg'

  const handleShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    login(email, password)
      .then(() => {
        toast.success("Congratulations! You've successfully Logged In.");
        setUserData(user);

        setTimeout(() => {
          navigate(location?.state ? location.state : "/");
        }, 1200);
      })
      .catch(() => {
        setLoading(false)
        toast.error(
          "Oops! Login failed.Wrong email and password. Please check your information and try again."
        );
        setIsError(true);
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then(() => {
        setTimeout(() => {
          navigate(location?.state ? location.state : "/");
        }, 3000);
        toast.success("Congratulations! You've successfully Logged In.");
      })
      .catch(() => {
        toast.error(
          "Oops! Login failed.Wrong email and password. Please check your information and try again."
        );
      });
  };
  const handleGithubLogin = () => {
    githubLogin()
      .then(() => {
        toast.success("Congratulations! You've successfully Logged In.");
        setTimeout(() => {
          navigate(location?.state ? location.state : "/");
        }, 700);
      })
      .catch(() => {
        toast.error(
          "Oops! Login failed.Wrong email and password. Please check your information and try again."
        );
      });
  };

  // //console.log(isError);
  return (
    <>
      <div className=" flex h-full w-full gap-24">
        <div>
            <img className="object-cover h-[64%] w-[900px]" src={imgURL || loginImg} alt="" />
        </div>
        <div className=" my-12">
        <Card color="transparent" shadow={false}>
          <Typography variant="h4" color="blue-gray">
            Sign In
          </Typography>
          <Typography color="gray" className="mt-1 mb-7 font-normal">
            Nice to meet you! Enter your details to Login.
          </Typography>

          {isError && (
            <>
              <div className=" py-3 rounded-sm border border-[#FF5D64] text-center bg-[#ff5d651d] ">
                <h1 className=" mb-1 text-lg font-bold text-[#121212e6]">
                  Wrong credentials
                </h1>
                <p>Invalid username or password</p>
              </div>
            </>
          )}
          <form
            onSubmit={handleLogin}
            className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
          >
            <div className="mb-1 flex flex-col gap-6">
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
              <div className=" relative">
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

            <button
              type="submit"
              className="mt-6 bg-gradient-to-r from-[#d0a260] to-[#c79c60da] w-full py-3 rounded-lg font-bold text-white text-xl"
            >
              sign In
            </button>
            <Typography color="gray" className="mt-4 text-center font-normal">
              {`Don't have an account`}?{" "}
              <Link
                to={"/register"}
                className="font-medium text-[#ff5d64ed] hover:underline"
              >
                Create an account
              </Link>
            </Typography>
            <div className="inline-flex items-center justify-center w-full mt-2">
              <hr className="w-full h-px my-8 bg-[#AAAAAA] border-0 " />
              <span className="absolute px-3 font-medium text-xl -translate-x-1/2 bg-white left-1/2 ">
                or
              </span>
            </div>

            <div
              onClick={handleGoogleLogin}
              className=" flex gap-4 border-2 border-[#4c4a4aae] items-center py-3 rounded-full justify-center cursor-pointer"
            >
              <FcGoogle className=" text-3xl" />
              <p className=" text-lg font-medium text-[#151515ca]">
                Continue with Google
              </p>
            </div>
            <div
              onClick={handleGithubLogin}
              className=" cursor-pointer flex gap-4 border-2 border-[#4c4a4aae] items-center py-3 rounded-full justify-center mt-6"
            >
              <FaGithub className=" text-3xl" />
              <p className=" text-lg font-medium text-[#151515ca]">
                Continue with GitHub
              </p>
            </div>
          </form>
        </Card>
        </div>
      </div>
      <ToastContainer autoClose={1000} />
    </>
  );
};

export default Login;