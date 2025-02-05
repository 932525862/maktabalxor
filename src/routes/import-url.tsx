import { lazy } from "react";

const Layout = lazy(() => import("../components/layout/index.tsx"));
const AboutPage = lazy(() => import("../pages/about/index.tsx"));
const ContactPage = lazy(() => import("../pages/contact/index.tsx"));
const NewsPage = lazy(() => import("../pages/news/index.tsx"));
const HomePage = lazy(() => import("../pages/home/index.tsx"));
const WetFruits = lazy(() => import("../pages/wet/index.tsx"));
const DryFruits = lazy(() => import("../pages/dry/index.tsx"));
const NewsSinglePage = lazy(() => import("../pages/news/newsOne.tsx"));

export {
    Layout, AboutPage, ContactPage, NewsPage, HomePage, WetFruits, DryFruits, NewsSinglePage
};