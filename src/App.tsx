import { RouterProvider } from "react-router-dom";
import router from "./routes/router";
import { Suspense } from "react";
import Loading from "./loading";

function App() {

  return (
    <Suspense fallback={<Loading />}>
      {<RouterProvider router={router} />}
    </Suspense>
  );
}

export default App;
