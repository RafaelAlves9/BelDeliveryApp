import { lazy } from "react";

const ClientImports = {
  Home: lazy(() => import("@pages/Client/Home/Home")),
  Store: lazy(() => import("@pages/Client/Home/Home")),
  Perfil: lazy(() => import("@pages/Client/Home/Home")),
  Orders: lazy(() => import("@pages/Client/Home/Home")),
};

export { ClientImports };