import { Outlet } from "react-router-dom";

export const LandingPage = () => {
  return <>
    <h1>Welcome to demo!</h1>
    <Outlet />
  </>;
};