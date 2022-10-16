import { lazy, Suspense } from "react";
const Layout = lazy(() => import("../components/layout"));
const { AuthProvider } = lazy(() => import("./server/firebase"));
const HomeCategory = lazy(() =>
  import("../components/Categories/HomeCategory")
);
const Trending = lazy(() => import("../components/Categories/Trending"));

export default function Home(Component) {
  return (
    <>
      <div className="bg-[#F9FAFF]">
        <AuthProvider>
          <Suspense fallback={<div>Loading...</div>}>
            <Layout>
              <HomeCategory />
              <Trending />
            </Layout>
          </Suspense>
        </AuthProvider>
      </div>
    </>
  );
}
