import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainPage from "./MainPage/MainPage";
import Login from "./Login/Login";
import { useAuth } from "./store";
import Error from "./Error/Error";

function App() {
  const isAuth = useAuth((state) => state.isAuth);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainPage />,
      errorElement: <Error />,
    },

    {
        path: "/login",
        element: <Login />,
        errorElement: <Error />,
      },
  ]);


  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
