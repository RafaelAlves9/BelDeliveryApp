import { TRoutePath } from "./ClientDataPaths";
import { AdminImports } from "../LazyImports/AdminImports";

export const AdminDataPaths: TRoutePath[] = [
  {
    path: "/admin",
    element: AdminImports.Home
  },
  {
    path: "/admin/perfil",
    element: AdminImports.Perfil
  },
  {
    path: "/admin/produtos",
    element: AdminImports.Products
  },
  {
    path: "/admin/configuracoes",
    element: AdminImports.Configuration
  },
  {
    path: "/admin/pedidos",
    element: AdminImports.Orders
  },
  {
    path: "/admin/promotions",
    element: AdminImports.Promotions
  }
];
