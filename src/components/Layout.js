import { Outlet } from "react-router-dom";
import { AppBar } from "components/Header/AppBar";
import { Suspense } from "react";

export const Layout = () => {
  return (
    <>
      <AppBar />
      <Suspense fallback={null} >
        <Outlet />
      </Suspense>
    </>
  );
};