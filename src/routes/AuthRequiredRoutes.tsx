import { useEffect } from "react";
import { getLocalStorageProperty } from "@utils/getLocalStorageProperty";
import { Navigate, Outlet } from "react-router-dom";

type props = {
  roleRoute: string;
};

const AuthRequiredRoutes = ({ roleRoute }: props) => {
  const id = getLocalStorageProperty("logged", "id");
  const role = getLocalStorageProperty("logged", "role");

  const isAuthorized = () => {
    if (role && id && role === roleRoute) {
      return true;
    } else {
      return false;
    };
  };

  useEffect(() => {
    isAuthorized();
  }, [id]);

  if (isAuthorized()) {
    return <Outlet />;
  } else {
    return <Navigate to="/login"/>;
  };
};

export default AuthRequiredRoutes;