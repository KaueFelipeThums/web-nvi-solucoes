import { lazy } from 'react';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { Footer } from '@/components/layout/footer';

const FitBox = lazy(() => import('@/pages/fit-box'));
const Contact = lazy(() => import('@/pages/contact'));
const Company = lazy(() => import('@/pages/company'));

const routes = createBrowserRouter([
  {
    element: (
      <>
        <Outlet />
        <Footer />
      </>
    ),
    children: [
      {
        path: '/',
        element: <FitBox />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/company',
        element: <Company />,
      },
    ],
  },
]);

const Routes = () => {
  return <RouterProvider router={routes} />;
};

export default Routes;
