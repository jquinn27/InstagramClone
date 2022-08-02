import { lazy, Suspense } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import * as ROUTES from './constants/routes'
const Login = lazy(() => import ('./pages/Login'))
const SignUp = lazy(() => import ('./pages/Signup'))


function App() {
  return (
    <Router>
      <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route path={ROUTES.LOGIN} element={<Login/>}/>
        <Route path={ROUTES.SIGN_UP} element={<SignUp/>}/>
      </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
