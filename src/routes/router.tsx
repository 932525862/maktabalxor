import { createBrowserRouter } from "react-router-dom";
import { AboutPage, NewsPage, ContactPage, HomePage, Layout, ProductionPage } from "./import-url";
import { Suspense } from "react";
import Loading from "../loading";

const Router = [
    {
        path: "/",
        element: <Suspense fallback={<Loading />}><Layout /></Suspense>,
        errorElement: <div>404</div>,
        children: [
            {
                path: "/",
                element: <Suspense fallback={<Loading />}><HomePage /></Suspense>
            },
            {
                path: "/about",
                element: <Suspense fallback={<Loading />}><AboutPage /></Suspense>
            },
            {
                path: "/contact",
                element: <Suspense fallback={<Loading />}><ContactPage /></Suspense>
            },
            {
                path: "/news",
                element: <Suspense fallback={<Loading />}><NewsPage /></Suspense>
            },
            {
                path: "/production",
                element: <Suspense fallback={<Loading />}><ProductionPage /></Suspense>
            }
        ]
    }
]

const router = createBrowserRouter(Router);

export default router;