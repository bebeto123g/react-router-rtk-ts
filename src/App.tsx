import React, { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import styled from '@emotion/styled';
import { Header } from 'Common/Widgets';
import { routes } from 'Router';
import './Styles/global.scss';

const Container = styled.div`
    margin: 84px 24px 12px;
`;

export const App = () => {
    const appRoutes = useRoutes(routes);

    return (
        <>
            <Header />
            <Container>
                <Suspense fallback={<div>...Loading</div>}>{appRoutes}</Suspense>
            </Container>
        </>
    );
};
