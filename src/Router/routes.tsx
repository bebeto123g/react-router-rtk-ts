import React from 'react';
import { RouteObject } from 'react-router-dom';
import { ERouterPaths } from 'Core/Enums';
import { HomePageLazy } from 'Modules/Home';
import { MaterialTablePageLazy, MaterialTableRoutes } from 'Modules/MaterialTable';
import { NotFoundPageLazy } from 'Modules/NotFound';

/**
 * Головной роутер приложения
 */
export const routes: RouteObject[] = [
    {
        path: ERouterPaths.HOME,
        element: <HomePageLazy />,
    },
    {
        path: ERouterPaths.MATERIAL_TABLE,
        element: <MaterialTablePageLazy />,
        children: MaterialTableRoutes,
    },
    {
        path: '*',
        element: <NotFoundPageLazy />,
    },
];
