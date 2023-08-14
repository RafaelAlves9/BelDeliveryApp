import { lazy } from "react";

const AdminImports = {
  Home: lazy(() => import("@pages/Store/Home/Home")),
  Perfil: lazy(() => import("@pages/Store/Perfil/Perfil")),
  Configuration: lazy(() => import("@pages/Store/Configuration/Configuration")),
  Orders: lazy(() => import("@pages/Store/Orders/Orders")),
  Products: lazy(() => import("@pages/Store/Products/Products")),
  Promotions: lazy(() => import("@pages/Store/Promotions/Promotions"))
};

export { AdminImports };