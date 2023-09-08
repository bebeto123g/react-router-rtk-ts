import React, { ReactNode } from 'react';

interface IErrorBoundaryViewProps {
    children?: ReactNode;
    resetCallback?: () => void | null;
}

export const ErrorBoundaryView = (props: IErrorBoundaryViewProps) => {
    const { children = '', resetCallback } = props;
    return (
        <div className="container">
            <h2 className="h2 mb-4 text-danger">Something went wrong</h2>

            {children && (
                <div className="row mb-3">
                    <div className="col">{children}</div>
                </div>
            )}
            {resetCallback && (
                <button className="btn btn-warning" onClick={resetCallback}>
                    Try again
                </button>
            )}
        </div>
    );
};
