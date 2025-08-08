import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { MainLayout } from './components/layouts/MainLayout';
import { PrivateRoute } from './components/route/PrivateRoute';
import { RestrictedRoute } from './components/route/RestrictedRoute';
// import { refreshUser } from './redux/operations/auth.operations';
import { useAuth } from './hooks';

const HomePage = lazy(() => import('./pages/HomePage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const DashboardPage = lazy(() => import('./pages/DashboardPage'));

function App() {
  // const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  // useEffect(() => {
  //   dispatch(refreshUser())
  // },[dispatch])

  return (
    <Suspense fallback={<p>Please wait...</p>}>
      {isRefreshing ? (
      <p>Please wait...</p>
    ) : (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<RestrictedRoute redirectTo="/login" component={<HomePage />} />} />
        <Route
          path="/register"
          element={<RestrictedRoute redirectTo="/" component={<RegisterPage />} />}
        />
        <Route
          path="/login"
          element={<RestrictedRoute redirectTo="/" component={<LoginPage />} />}
        />
        <Route
        path='dashboard'
        element={<PrivateRoute redirectTo='/login' component={<DashboardPage/>} />}></Route>
      </Route>
    </Routes>
    )}
    </Suspense>
  );
}

export default App;
