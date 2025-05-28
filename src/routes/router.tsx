import { createBrowserRouter } from "react-router-dom";
import {
  AboutPage,
  NewsPage,
  ContactPage,
  HomePage,
  Layout,
  WetFruits,
  NewsSinglePage,
  BranchesPage,
  AdmissionPage
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
            <BranchesPage />
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
        path: "/reception",
        element: (
          <Suspense fallback={<Loading />}>
            <AdmissionPage />
          </Suspense>
        ),
      },
    ],
  },
];

const router = createBrowserRouter(Router);

export default router;
