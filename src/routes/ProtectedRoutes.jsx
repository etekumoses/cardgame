import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {

  // fetch data from our store
  const { user } = useSelector((state) => state.auth);

  console.log(user);
  return  user != null ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;
