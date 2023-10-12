import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  createRoutesFromElements,
  Routes,
  useNavigate,
  BrowserRouter,
} from "react-router-dom";
import "./assets/styles/bootstrap.custom.css";
//import 'bootstrap/dist/css/bootstrap.min.css'
import "./assets/styles/index.css";
import App from "./App.jsx";
import HomeScreen from "./screens/HomeScreen";
import ProtectedPage from "./auth/ProtectedPage";
import {
  ClerkProvider,
  SignedIn,
  SignIn,
  SignUp,
  SignedOut,
  RedirectToSignIn,
} from "@clerk/clerk-react";

if (!import.meta.env.VITE_APP_CLERK_PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}
const clerkPubKey = import.meta.env.VITE_APP_CLERK_PUBLISHABLE_KEY;

const ClerkWithRoutes = () => {
  const navigate = useNavigate();

  return (
    <ClerkProvider publishableKey={clerkPubKey} navigate={(to) => navigate(to)}>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index={true} path="/" element={<HomeScreen />}/>
        </Route>
        <Route
          path="/sign-in/*"
          element={<SignIn redirectUrl={'/protected'} routing="path" path="/sign-in" />}
        />
        <Route
          path="/sign-up/*"
          element={<SignUp redirectUrl={'/protected'} routing="path" path="/sign-up" />}
        />
        <Route
          path="/protected"
          element={
            <>
              <SignedIn>
                <ProtectedPage />
              </SignedIn>
              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>
            </>
          }
        />
      </Routes>
    </ClerkProvider>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ClerkWithRoutes />
    </BrowserRouter>
  </React.StrictMode>,
);
