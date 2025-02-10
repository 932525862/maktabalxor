import { lazy } from "react";

const Layout = lazy(() => import("../components/layout/index.tsx"));
const AboutPage = lazy(() => import("../pages/about/index.tsx"));
const ContactPage = lazy(() => import("../pages/contact/index.tsx"));
const NewsPage = lazy(() => import("../pages/news/index.tsx"));
const HomePage = lazy(() => import("../pages/home/index.tsx"));
const WetFruits = lazy(() => import("../pages/wet/index.tsx"));
const DryFruits = lazy(() => import("../pages/dry/index.tsx"));
const NewsSinglePage = lazy(() => import("../pages/news/newsOne.tsx"));
const NutsPage = lazy(() => import("../pages/nuts/index.tsx"));
const ProductsPage = lazy(() => import("../pages/products/index.tsx"));
const Dehydrated = lazy(() => import("../pages/dehydrated/index.tsx"));
const Frozen = lazy(() => import("../pages/frozen/index.tsx"));
const Frozend = lazy(() => import("../pages/frozend/index.tsx"));

export {
    Layout, AboutPage, ContactPage, NewsPage, HomePage, WetFruits, DryFruits, ProductsPage, NewsSinglePage, NutsPage ,Dehydrated ,Frozen,Frozend
};