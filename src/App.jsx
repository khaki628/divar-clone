import InterPage from "./intro page/interPage";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./main page/mainPage";
import Login from "./loginpage/login";
import PrivetRoute from "./privet/privetRoute";
import Advertising from "./Advertising page/Advertising";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <InterPage />,
    },
    {
      path: "/main-Page",
      element: <MainPage />,
    },
    {
      path: "/Advertising",
      element: (
        <PrivetRoute>
          <Advertising />
        </PrivetRoute>
      ),
    },
  ]);
  return (
    <div>
      <RecoilRoot>
        <RouterProvider router={router} />
      </RecoilRoot>
    </div>
  );
}

export default App;
