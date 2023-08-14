import { useEffect } from "react";
import { getLocalStorageProperty } from "@utils/getLocalStorageProperty";
import { Navigate, Outlet } from "react-router-dom";

type props = {
  roleRoute: string;
};

const AuthRequiredRoutes = ({ roleRoute }: props) => {
  const token = getLocalStorageProperty("user", "token");
  const role = getLocalStorageProperty("user", "role");

  const isAuthorized = () => {
    if (role && token && role === roleRoute) {
      return true;
    } else {
      return false;
    };
  };

  useEffect(() => {
    isAuthorized();
  }, [token]);

  if (isAuthorized()) {
    return <Outlet />;
  } else {
    return <Navigate to="/not-autorized"/>;
  };
};

export default AuthRequiredRoutes;