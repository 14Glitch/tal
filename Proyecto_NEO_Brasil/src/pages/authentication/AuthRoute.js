import { lazy } from 'react';
import Loadable from 'components/Loadable';
import { Navigate } from "react-router-dom";

const ChatPage = Loadable(lazy(() => import('pages/chat')));

const AuthRoute = ({ auth, setAuth }) => {

  return auth ? (
    <ChatPage setAuth={setAuth} />
  ) : (
    <Navigate to="/login" />
  )
};

export default AuthRoute;
