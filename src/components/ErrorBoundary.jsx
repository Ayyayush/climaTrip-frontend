import { Component } from "react";

// Prevents a single component throw from blanking the entire app.
// Same visual language as the rest of the app (gradient background,
// rounded card) so the fallback doesn't look out of place.
class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        // eslint-disable-next-line no-console
        console.error("Unhandled UI error:", error, info);
    }

    handleReload = () => {
        this.setState({ hasError: false });
        window.location.reload();
    };

    render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 px-4">
                    <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full text-center border border-gray-100">
                        <h1 className="text-xl font-semibold text-gray-800 mb-2">
                            Something went wrong
                        </h1>
                        <p className="text-gray-500 mb-6">
                            An unexpected error occurred. Reloading usually fixes this.
                        </p>
                        <button
                            onClick={this.handleReload}
                            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-xl font-medium hover:from-blue-700 hover:to-purple-700 transition-all"
                        >
                            Reload page
                        </button>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
