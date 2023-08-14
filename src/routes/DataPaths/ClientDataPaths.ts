import { LazyExoticComponent } from "react";
import { ClientImports } from "../LazyImports/ClientImports";

export type TRoutePath = {
  path: string;
  element: LazyExoticComponent<() => JSX.Element>;
};

export const ClientDataPaths: TRoutePath[] = [
  {
    path: "/cliente",
    element: ClientImports.Home
  },
  {
    path: "/cliente/home",
    element: ClientImports.Home
  },
  {
    path: "/cliente/perfil",
    element: ClientImports.Perfil
  },
  {
    path: "/loja/:name",
    element: ClientImports.Store
  },
  {
    path: "/cliente/pedidos",
    element: ClientImports.Orders
  },
];