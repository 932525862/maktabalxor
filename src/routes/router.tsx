import { createBrowserRouter } from "react-router-dom";
import { AboutPage, NewsPage, ContactPage, HomePage, Layout, ProductionPage } from "./import-url";
import { Suspense } from "react";

const Router = [
    {
        path: "/",
        element: <Suspense fallback={<div>Loading...</div>}><Layout /></Suspense>,
        errorElement: <div>404</div>,
        children: [
            {
                path: "/",
                element: <Suspense fallback={<div>Loading...</div>}><HomePage /></Suspense>
            },
            {
                path: "/about",
                element: <Suspense fallback={<div>Loading...</div>}><AboutPage /></Suspense>
            },
            {
                path: "/contact",
                element: <Suspense fallback={<div>Loading...</div>}><ContactPage /></Suspense>
            },
            {
                path: "/catalog",
                element: <Suspense fallback={<div>Loading...</div>}><NewsPage /></Suspense>
            },
            {
                path: "/production",
                element: <Suspense fallback={<div>Loading...</div>}><ProductionPage /></Suspense>
            }
        ]
    }
]

const router = createBrowserRouter(Router);

export default router;