import { Header } from "../components/Header";
import { Outlet, useLocation } from "react-router-dom";

const HomeLayout = () => {
  const { pathname } = useLocation();
  const isPublic =
    pathname === "/public" ? true : pathname === "/private" ? false : null;

  if (isPublic === null) {
    return <Outlet />;
  }

  return (
    <>
      <Header isPublic={isPublic} />
      <div className="h-[calc(100vh-96px)] w-full">
        <Outlet />
      </div>
    </>
  );
};

export default HomeLayout;