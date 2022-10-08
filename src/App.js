import { useEffect, useState, useContext, useRef } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { setCookie } from './utils/js';
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer';
import Landing from './pages/landing/Landing';
import PageNotFound from './pages/404/PageNotFound';
import Details from './pages/details/Details';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import VerifyEmail from './pages/auth/VerifyEmail';
import UserPanel from './pages/panels/user/UserPanel';
import AdminPanel from './pages/panels/admin/AdminPanel';
import ForgetPass from './pages/auth/ForgetPass';
import ChangePass from './pages/auth/ChangePass';
import AuthContext from './contexts/authContext';
import { newToken } from './api/usersApi';
import Loader from './components/common/Loader';
import GoUp from './components/common/Buttons/GoUp';
import Category from './pages/category/Category';
import Favorite from './pages/favorite/Favorite';
import { Toaster } from 'react-hot-toast';
import LoadingBar from 'react-top-loading-bar';

function App() {
  const { isLoggedIn, accessToken } = useContext(AuthContext);
  const [progress, setProgress] = useState(0);
  const ref = useRef();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    ref.current.continuousStart();
    ref.current.complete();
    // let intervalId;
    // if (isLoggedIn) {
    //   intervalId = setInterval(async () => {
    //     const data = await newToken();
    //     setCookie('access-token', data.access, 5);
    //   }, 120000);
    // }
    // return () => clearInterval(intervalId);
  });

  return (
    <div className="w-full min-h-screen flex flex-col relative dark:bg-slate-800 text-black dark:text-white bg-slate-50 font-fanum transition">
      <div style={{ direction: 'ltr' }}>
        <LoadingBar color="#1192f0" ref={ref} />
      </div>
      <Toaster position="top-center" reverseOrder={false} />
      <Header />
      {/* <GoUp /> */}
      <div className="mx-0 p-2">
        <div className="w-full h-full max-w-screen-xl mx-auto">
          <Routes>
            <Route exact path="/" element={<Landing />} />
            <Route exact path="*" element={<PageNotFound />} />
            <Route exact path="/search/:q/" element={<Landing />} />
            <Route exact path="/movie/:id/" element={<Details />} />
            <Route exact path="/series/:id/" element={<Details />} />
            <Route exact path="/animation/:id/" element={<Details />} />
            <Route exact path="/anime/:id/" element={<Details />} />
            <Route exact path="/:category/:value/" element={<Category />} />
            <Route exact path="/forget-password/" element={<ForgetPass />} />
            <Route exact path="/change-password/" element={<ChangePass />} />
            {!isLoggedIn ? (
              <>
                <Route exact path="/login/" element={<Login />} />
                <Route exact path="/signup/" element={<Signup />} />
                <Route exact path="/verify-email/" element={<VerifyEmail />} />
              </>
            ) : (
              <Route exact path="/favorite/" element={<Favorite />} />
            )}
            {accessToken?.is_superuser ? (
              <Route exact path="/panel/admin/" element={<AdminPanel />} />
            ) : (
              <Route exact path="/panel/user/" element={<UserPanel />} />
            )}
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
