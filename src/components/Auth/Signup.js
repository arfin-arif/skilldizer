import React, { useEffect } from "react";
import { AiOutlineLock } from "react-icons/ai";
import { CiMail, CiUser } from "react-icons/ci";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { motion, useAnimation } from "framer-motion";
import router from "next/router";
import Image from "next/image";
import { openAlert } from "../../store/reducer/alertReducer";
import { clearError } from "../../store/reducer/userReducer";
import { useDispatch, useSelector } from "react-redux";
import AlertComponent from "../../components/Utils/AlertComponent";
import { useState } from "react";

// * OAuth
import GoogleOAuth from "./OAuth/GoogleOAuth";
import FacebookOAuth from "./OAuth/FacebookOAuth";
import signupImage from "../../../public/images/signup.png";
import AuthService from "../../services/auth.service";
import { errorNotification, successNotification } from "../notification";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const animation = useAnimation();
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);
  const { loading, error, user } = useSelector((state) => state.user);

  const signIn = () => {
    animation.start({
      opacity: 0,
      y: 200,
      transition: { duration: 1.5 },
    });
    router.push("/login");
  };

  const onSubmit = async (data) => {
    console.log('signup.js');
    try {
      const res = await AuthService.registerUser(data);
      successNotification(res.message);
      successNotification("Please check your email to verify your account. If you can't find try using sign in", { autoClose: 10000 });
      reset();
    } catch (e) {
      errorNotification(e.message);
    }
  };

  useEffect(() => {
    if (error) {
      dispatch(openAlert({ severity: "error", message: error }));
      dispatch(clearError());
      return;
    }

    if (user) {
      router.push("/profile/dashboard");
    }
  }, [error, user, dispatch]);

  return (
    <section
      style={{ minHeight: "calc(100vh - 80px" }}
      className="grid bg-[#FDECE4] w-full place-items-center"
    >
      <div className="md:grid md:grid-cols-2 shadow-md p-10 place-items-center max-w-4xl rounded-2xl bg-[#FFFFFF] overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          exit={{ opacity: 0, y: 200, transition: { duration: 1.2 } }}
          className="order-1 hidden md:inline-block"
        >
          <Image
            className="-mt-10"
            loading="lazy"
            src={signupImage}
            alt="sign_up"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
          exit={{ opacity: 0, x: -200, transition: { duration: 1.5 } }}
          className=""
        >
          <div>
            <h2 className="text-[2rem] text-[#313140] font-semibold">
              Get <span className="text-[#FF5A00]">Started</span>, Student!
            </h2>
            <p className="mt-2 text-xs text-gray-400">
              Create your account, choose your tutor and start learning
              something new!
            </p>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-8 min-w-[320px]"
          >
            <label className="label">Full Name</label>
            <div className="relative">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <CiUser />
              </div>
              <input
                {...register("name", {
                  required: "Full name is required",
                })}
                type="text"
                id="email-address-icon"
                className="select_input pl-10"
                placeholder="John Doe"
              />
            </div>
            <ErrorMessage
              errors={errors}
              name="name"
              render={({ message }) => (
                <p className="text-sm text-red-600 italic">{message}</p>
              )}
            />
            <label htmlFor="email-address-icon" className="label mt-3">
              Your Email
            </label>
            <div className="relative">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <CiMail />
              </div>
              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value:
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: "Please enter a valid email",
                  },
                })}
                type="email"
                id="email-address-icon"
                className="select_input pl-10"
                placeholder="name@skilldizer.com"
              />
            </div>
            <ErrorMessage
              errors={errors}
              name="email"
              render={({ message }) => (
                <p className="text-sm text-red-600 italic">{message}</p>
              )}
            />
            <label className="label mt-3">Password</label>
            <div className="relative">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <AiOutlineLock />
              </div>
              <input
                {...register("password", {
                  required: "Password is required",
                })}
                type="password"
                id="password"
                className="select_input pl-10"
                placeholder="*********"
              />
              <ErrorMessage
                errors={errors}
                name="password"
                render={({ message }) => (
                  <p className="text-sm text-red-600 italic">{message}</p>
                )}
              />
            </div>
            <div className="flex mt-6 mb-1 items-start space-x-1 text-sm text-gray-500">
              <input
                checked={checked}
                onChange={(e) => setChecked(e.target.checked)}
                type="checkbox"
                className="mt-1 cursor-pointer"
              />{" "}
              <p>
                I&apos;ve read and accept the Skilldizer&apos;s{" "}
                <a
                  className="cursor-pointer underline text-[#c75927]"
                  href="/images/Skilldizer Privacy Policy.pdf"
                >
                  Privacy Policy
                </a>{" "}
                and{" "}
                <a
                  className="cursor-pointer text-[#c75927] underline"
                  href="images/Skilldizer terms of service.pdf"
                >
                  Terms of Service
                </a>
              </p>
            </div>
            <button
              disabled={!checked || loading}
              type="submit"
              className="w-full  button"
            >
              {loading ? (
                <>
                  <svg
                    role="status"
                    className="inline mr-2 w-4 h-4 text-white animate-spin dark:text-gray-600 fill-white"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                  Processing...
                </>
              ) : (
                "Sign Up"
              )}
            </button>
          </form>
          <div className="my-[15px] flex items-center justify-center space-x-4">
            <FacebookOAuth />
            <GoogleOAuth />
          </div>
          <p className="text-sm text-center text-slate-500">
            Already have an account?{" "}
            <span
              onClick={signIn}
              className="text-[#FF5A00] font-semibold cursor-pointer"
            >
              Sign In.
            </span>
          </p>
        </motion.div>
      </div>
      <AlertComponent />
    </section>
  );
};

export default SignUp;
