import { TRoutePath } from "./ClientDataPaths";
import { CommonImports } from "../LazyImports/CommonImports";

export const CommonDataPaths: TRoutePath[] = [
  {
    path: "/login",
    element: CommonImports.Login
  },
  {
    path: "/register",
    element: CommonImports.Register
  },
  {
    path: "/not-found",
    element: CommonImports.NotFound
  },
  {
    path: "*",
    element: CommonImports.NotFound
  },
  {
    path: "/not-authorization",
    element: CommonImports.NotAuth
  }
];
