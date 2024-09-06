import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ContentPage from "./components/pages/ContentPage";
import PostPreview from "./components/pages/BlogPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ContentPage />,
  },

  {
    path: "/post-preview",
    element: <PostPreview />,
  },
]);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
