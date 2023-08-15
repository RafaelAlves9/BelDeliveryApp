import { TRoutePath } from "./ClientDataPaths";
import { RestaurantImports } from "../LazyImports/RestaurantImports";

export const RestaurantDataPaths: TRoutePath[] = [
  {
    path: "/restaurante",
    element: RestaurantImports.Home
  },
  {
    path: "/restaurante/perfil",
    element: RestaurantImports.Perfil
  },
  {
    path: "/restaurante/produtos",
    element: RestaurantImports.Products
  },
  {
    path: "/restaurante/pedidos",
    element: RestaurantImports.Orders
  },
  {
    path: "/restaurante/promocao",
    element: RestaurantImports.Promotions
  }
];
