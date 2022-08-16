import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import useAuthListener from "./hooks/use-auth-listener";
import UserContext from "./context/user";

import ProtectedRoute from "./helpers/protected-route";
import IsUserLoggedIn from "./helpers/is-user-logged-in";

const Login = lazy(() => import("./pages/Login"));
const SignUp = lazy(() => import("./pages/Signup"));
const NotFound = lazy(() => import("./pages/not-found"));
const DasbhoardPage = lazy(() => import("./pages/Dashboard"));
const PostPage = lazy(() => import("./pages/Post"));
const ProfilePage = lazy(() => import("./pages/Profile"));

export default function App() {
  const { user } = useAuthListener();

  return (
    <UserContext.Provider value={{ user }}>
      <Router>
        <Suspense
          fallback={<p className="font-bold text-center">Loading...</p>}
        >
          <Routes>
            <Route
              exact
              path={ROUTES.DASHBOARD}
              element={<ProtectedRoute user={user} />}
            >
              <Route
                exact
                path={ROUTES.DASHBOARD}
                element={<DasbhoardPage />}
              />
            </Route>

            <Route
              exact
              path={ROUTES.LOGIN}
              element={<IsUserLoggedIn user={user} />}
            >
              <Route exact path={ROUTES.LOGIN} element={<Login />} />
            </Route>

            <Route
              exact
              path={ROUTES.SIGN_UP}
              element={<IsUserLoggedIn user={user} />}
            >
              <Route exact path={ROUTES.SIGN_UP} element={<SignUp />} />
            </Route>
            <Route path={ROUTES.PROFILE} element={<ProfilePage />} />

            <Route
              exact
              path={ROUTES.POST}
              element={<ProtectedRoute user={user} />}
            >
              <Route exact path={ROUTES.POST} element={<PostPage />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Router>
    </UserContext.Provider>
  );
}
