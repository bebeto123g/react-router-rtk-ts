import React, { Component, ReactNode } from 'react';
import { ErrorBoundaryView } from './ErrorBoundaryView';

interface IErrorBoundaryProps {
    children: ReactNode;
    errorFallback?: ReactNode;
}

interface IErrorBoundaryState {
    hasError: boolean;
    resetErrorBoundary?: () => void;
}

export class ErrorBoundary extends Component<IErrorBoundaryProps, IErrorBoundaryState> {
    constructor(props: IErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error): IErrorBoundaryState {
        // @ts-ignore
        return { hasError: true, resetErrorBoundary: error?.cause?.resetErrorBoundary || null };
    }

    // componentDidCatch(error: Error) {
    // You can also log the error to an error reporting service
    // console.dir(error);
    // }

    render() {
        if (this.state.hasError) {
            return (
                <ErrorBoundaryView resetCallback={this.state.resetErrorBoundary}>
                    {this.props.errorFallback}
                </ErrorBoundaryView>
            );
        }

        return this.props.children;
    }
}
