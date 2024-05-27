import { Fallback } from '@/components/shared/fallback';
import { lazyImport } from '@/utils/lazy-import';
import { Suspense } from 'react';
import { Outlet, RouteObject } from 'react-router-dom';

import { AppLayout } from '@/components/layout';

const { HomeRoutes } = lazyImport(
  () => import('@/features/home'),
  'HomeRoutes'
);

const App = () => {
  return (
    <AppLayout>
      <Suspense fallback={<Fallback />}>
        <Outlet />
      </Suspense>
    </AppLayout>
  );
};

export const AppRoutes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        // path: 'announcements/*',
        index: true,
        element: <HomeRoutes />,
      },
    ],
  },
];
