import React from 'react';
import { Outlet } from 'react-router-dom';
import { SelectRouter } from '../Components/SelectRouter';

const MaterialTablePage = () => {
    return (
        <div className="container">
            <h1 className="h1">Material Table Page</h1>
            <SelectRouter />
            <Outlet />
        </div>
    );
};

export default MaterialTablePage;
