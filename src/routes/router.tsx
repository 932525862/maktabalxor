import { createBrowserRouter } from "react-router-dom";
import {
  AboutPage,
  NewsPage,
  ContactPage,
  HomePage,
  Layout,
  WetFruits,
  DryFruits,
  NewsSinglePage,
  NutsPage,
  ProductsPage
} from "./import-url";
import { Suspense } from "react";
import Loading from "../loading";
import ErrorPage from "../pages/404";

const Router = [
  {
    path: "/",
    element: (
      <Suspense fallback={<Loading />}>
        <Layout />
      </Suspense>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<Loading />}>
            <HomePage />
          </Suspense>
        ),
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<Loading />}>
            <AboutPage />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<Loading />}>
            <ContactPage />
          </Suspense>
        ),
      },
      {
        path: "/news",
        element: (
          <Suspense fallback={<Loading />}>
            <NewsPage />
          </Suspense>
        ),
      },
      {
        path: "/news/:id",
        element: (
          <Suspense fallback={<Loading />}>
            <NewsSinglePage />
          </Suspense>
        ),
      },
      {
        path: "/production",
        element: (
          <Suspense fallback={<Loading />}>
            <ProductsPage />
          </Suspense>
        ),
      },
      {
        path: "/production/wet",
        element: (
          <Suspense fallback={<Loading />}>
            <WetFruits />
          </Suspense>
        ),
      },
      {
        path: "/production/dry",
        element: (
          <Suspense fallback={<Loading />}>
            <DryFruits />
          </Suspense>
        ),
      },
      {
        path: "/production/nuts",
        element: (
          <Suspense fallback={<Loading />}>
            <NutsPage />
          </Suspense>
        ),
      }
    ],
  },
];

const router = createBrowserRouter(Router);

export default router;
