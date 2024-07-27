import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeComp from "./components/HomeComp";
import AboutComp from "./components/AboutComp";
import ContactComp from "./components/ContactComp";
import RecipesComp from "./components/RecipesComp";
import FooterComp from "./components/FooterComp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeComp />,
  },
  {
    path: "about",
    element: <AboutComp />,
  },
  {
    path: "contact",
    element: <ContactComp />,
  },
  {
    path: "recipes",
    element: <RecipesComp />,
  },
  {
    path: "/footer",
    element: <FooterComp />,
  },
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
