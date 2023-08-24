import React from 'react';
import { RouteObject } from 'react-router-dom';
import AboutPage from 'Pages/AboutPage';
import MainPage from 'Pages/MainPage';
import { ERouterPaths } from './enums';

/**
 * Головной роутер приложения
 */
export const routes: RouteObject[] = [
    {
        path: ERouterPaths.HOME,
        element: <MainPage />,
    },
    {
        path: ERouterPaths.ABOUT,
        element: <AboutPage />,
    },
];
