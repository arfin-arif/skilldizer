import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadUserAction, logOut } from "../../store/actions/userAction";

export function AuthGuard({ children, fromBecomeTutor }) {
  const { user, error } = useSelector((state) => state.user);

  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
    if (!fromBecomeTutor) {
      if (user?.role === "TUTOR" && !user.isProfileCompleted) {
        router.push("/become-tutor/part1");
      }
    }
  }, [router, user]);
  useEffect(() => {
    dispatch(loadUserAction());
    if (error) {
      dispatch(logOut());
    }
  }, [router, error, dispatch]);

  if (user && !error) {
    return <>{children}</>;
  }

  return null;
}
