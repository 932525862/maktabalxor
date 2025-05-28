import { lazy } from "react";

const Layout = lazy(() => import("../components/layout/index.tsx"));
const AboutPage = lazy(() => import("../pages/about/index.tsx"));
const ContactPage = lazy(() => import("../pages/contact/index.tsx"));
const NewsPage = lazy(() => import("../pages/news/index.tsx"));
const HomePage = lazy(() => import("../pages/home/index.tsx"));
const WetFruits = lazy(() => import("../pages/oltiariq/index.tsx"));
const NewsSinglePage = lazy(() => import("../pages/news/newsOne.tsx"));
const BranchesPage = lazy(() => import("../pages/branches/index.tsx"));
const AdmissionPage = lazy(() => import("../pages/reception/index.tsx"))

export {
    Layout, AboutPage, ContactPage, NewsPage, HomePage, WetFruits, BranchesPage, NewsSinglePage, AdmissionPage
};