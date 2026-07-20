// Generic Suspense fallback for lazily-loaded route-level components.
// Intentionally minimal/theme-neutral so it doesn't read as a new visual
// element — just a brief loading state during the code-split chunk fetch.
const PageLoader = () => (
    <div className="flex items-center justify-center py-24">
        <div className="h-10 w-10 rounded-full border-4 border-blue-200 border-t-blue-600 animate-spin" />
    </div>
);

export default PageLoader;
