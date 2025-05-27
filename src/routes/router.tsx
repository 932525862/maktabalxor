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
  ProductsPage,
  Dehydrated ,
  Frozen,
  Frozend
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
        path: "/branches",
        element: (
          <Suspense fallback={<Loading />}>
            <ProductsPage />
          </Suspense>
        ),
      },
      {
        path: "/branches/oltiariq",
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
        path: "/production/dehydrated",
        element: (
          <Suspense fallback={<Loading />}>
            < Dehydrated/>
          </Suspense>
        ),
      },
      {
        path: "/production/frozen",
        element: (
          <Suspense fallback={<Loading />}>
            < Frozen/>
          </Suspense>
        ),
      },
      {
        path: "/production/frozend",
        element: (
          <Suspense fallback={<Loading />}>
            < Frozend/>
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
