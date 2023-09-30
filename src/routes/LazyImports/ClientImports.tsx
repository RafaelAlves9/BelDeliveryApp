import { lazy } from "react";

const ClientImports = {
  Home: lazy(() => import("@pages/Client/Home/Home")),
  Store: lazy(() => import("@pages/Client/Store/Store")),
  Perfil: lazy(() => import("@pages/Client/Perfil/Perfil")),
  Orders: lazy(() => import("@pages/Client/Orders/Orders")),
  Categories: lazy(() => import("@pages/Client/Categories/Categories")),
};

export { ClientImports };