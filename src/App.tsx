import "./App.css";
import HomeScreen from "./components/homeScreen";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LoginScreen from "./components/loginScreen";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import ProfileScreen from "./components/profile";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const checkUser = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        dispatch(logout());
      }
    });
    return checkUser;
  }, [dispatch]);

  // const loginRouter = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <LoginScreen />,
  //   },
  // ]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeScreen />,
    },
    { path: "login", element: <LoginScreen /> },
    { path: "profile", element: <ProfileScreen /> },
  ]);
  return (
    <div className="app">
      {!user ? <LoginScreen /> : <RouterProvider router={router} />}
    </div>
  );
}

export default App;
