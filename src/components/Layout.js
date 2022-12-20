import { Outlet } from "react-router-dom";
import { Header } from "./Header/Header";
import { Suspense } from "react";

export const Layout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={null} >
        <Outlet />
      </Suspense>
    </>
  );
};