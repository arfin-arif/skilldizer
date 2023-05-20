import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearError, loginSuccess } from "../../src/store/reducer/userReducer";
import { useRouter } from "next/router";
import Loader from "../../src/components/Utils/Loader";
import AuthService from "../../src/services/auth.service";
import {
  errorNotification,
  infoNotification,
  successNotification,
} from "../../src/components/notification";

const EmailVerify = () => {
  const { user, error } = useSelector((state) => state.user);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
  const { token } = router.query;

  const emailConfirm = async () => {
    if (token) {
      try {
        const res = await AuthService.verifyEmail(token);
        successNotification(res.message);
        dispatch(loginSuccess(res?.user));
      } catch (e) {
        errorNotification(e.message);
        if (e?.error?.errorCode === 1002) {
          infoNotification("Please login to email verification", {
            autoClose: 10000,
          });
          router.push("/login");
        }
      }
    }
  };

  useEffect(() => {
    const emailConfirm = async () => {
      if (token) {
        try {
          setLoading(true);
          const res = await AuthService.verifyEmail(token);
          successNotification(res.message);
          dispatch(loginSuccess(res?.user));
          router.push("/profile/dashboard");
          setLoading(false);
        } catch (e) {
          setLoading(false);
          errorNotification(e.message);
          if (e?.error?.errorCode === 1002) {
            infoNotification("Please login to email verification", {
              autoClose: 10000,
            });
            router.push("/login");
          }
        }
      }
    };

    emailConfirm();
  }, [token, dispatch, router]);
  return (
    <section
      style={{ minHeight: "calc(100vh - 80px)" }}
      className="grid bg-slate-100 place-items-center"
    >
      {loading && <Loader />}
    </section>
  );
};

export default EmailVerify;
