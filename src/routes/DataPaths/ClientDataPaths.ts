import { LazyExoticComponent } from "react";
import { ClientImports } from "../LazyImports/ClientImports";

export type TRoutePath = {
  path: string;
  element: LazyExoticComponent<() => JSX.Element>;
};

export const ClientDataPaths: TRoutePath[] = [
  {
    path: "/",
    element: ClientImports.Home
  },
  {
    path: "/home",
    element: ClientImports.Home
  },
  {
    path: "/perfil",
    element: ClientImports.Perfil
  },
  {
    path: "/loja/:name",
    element: ClientImports.Store
  },
  {
    path: "/pedidos",
    element: ClientImports.Orders
  },
  {
    path: "/restaurantes",
    element: ClientImports.Orders
  },
];