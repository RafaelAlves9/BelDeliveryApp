import { lazy } from "react";

const RestaurantImports = {
  Home: lazy(() => import("@pages/Restaurant/Home/Home")),
  Perfil: lazy(() => import("@pages/Restaurant/Perfil/Perfil")),
  Configuration: lazy(() => import("@pages/Restaurant/Configuration/Configuration")),
  Orders: lazy(() => import("@pages/Restaurant/Orders/Orders")),
  Products: lazy(() => import("@pages/Restaurant/Products/Products")),
  Promotions: lazy(() => import("@pages/Restaurant/Promotions/Promotions"))
};

export { RestaurantImports };