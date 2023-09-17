import React, { useEffect, useState } from 'react';
import { APIProvider } from 'Core/API/Provider';

const HomePage = () => {
    const [todos, setTodos] = useState<any>(null);

    useEffect(() => {
        APIProvider.get('https://jsonplaceholder1.typicode.com/posts', {}, {}).then(setTodos);
    }, []);

    return (
        <div className="container">
            <h1 className="h1">Home Page</h1>
            <pre>{todos && JSON.stringify(todos, null, 2)}</pre>
        </div>
    );
};

export default HomePage;
