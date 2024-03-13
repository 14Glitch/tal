import { useState } from "react";
import { useLocation, useRoutes } from "react-router-dom";

// project import
import LoginRoutes from './LoginRoutes';
import MainRoutes from './MainRoutes';

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
  const [auth, setAuth] = useState(false);
  const location = useLocation();
  return useRoutes([MainRoutes(auth,setAuth,location), LoginRoutes(setAuth)]);
}
