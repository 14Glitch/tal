import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';

const NoticiasPage = Loadable(lazy(() => import('pages/noticias')));
const ProfilePage = Loadable(lazy(() => import('pages/profile')));
const AuthRoutePage = Loadable(lazy(() => import('pages/authentication/AuthRoute')));
const SupportRoutePage = Loadable(lazy(() => import('pages/support')));

// render - utilities
//const Typography = Loadable(lazy(() => import('pages/components-overview/Typography')));
//const Color = Loadable(lazy(() => import('pages/components-overview/Color')));
//const Shadow = Loadable(lazy(() => import('pages/components-overview/Shadow')));
//const AntIcons = Loadable(lazy(() => import('pages/components-overview/AntIcons')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = ( auth, setAuth, location ) => {
  return {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <AuthRoutePage setAuth={setAuth} auth={auth} location={location} />
      },
      {
        path: 'profile',
        element: <ProfilePage />
      },
      {
        path: 'noticias',
        element: <NoticiasPage />
      },
      {
        path: 'chat',
        element: <AuthRoutePage setAuth={setAuth} auth={auth} location={location} />
      },
      {
        path: 'support',
        element: <SupportRoutePage />
      },
    ]
  };
}

export default MainRoutes;
