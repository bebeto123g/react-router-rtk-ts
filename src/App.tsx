import React, { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import { Header } from 'Common/Components/Header';
import { routes } from 'Router';
import './Styles/global.scss';

export const App = () => {
    const appRoutes = useRoutes(routes);

    return (
        <>
            <Header />
            <Suspense fallback={<div>...Loading</div>}>{appRoutes}</Suspense>
        </>
    );
};
