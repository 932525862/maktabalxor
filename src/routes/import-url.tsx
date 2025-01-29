import { lazy } from "react";

const Layout = lazy(() => import("../components/layout/index.tsx"));
const AboutPage = lazy(() => import("../pages/about/index.tsx"));
const ContactPage = lazy(() => import("../pages/contact/index.tsx"));
const NewsPage = lazy(() => import("../pages/news/index.tsx"));
const HomePage = lazy(() => import("../pages/home/index.tsx"));
const ProductionPage = lazy(() => import("../pages/production/index.tsx"));
const WetFruits = lazy(() => import("../pages/wet/index.tsx"));
const DryFruits = lazy(() => import("../pages/dry/index.tsx"));

export {
    Layout, AboutPage, ContactPage, NewsPage, HomePage, ProductionPage, WetFruits, DryFruits
};