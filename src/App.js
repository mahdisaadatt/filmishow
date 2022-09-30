import { useEffect, useState, useContext } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { setCookie } from './utils/js';
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer';
import Landing from './pages/landing/Landing';
import Genre from './pages/category/Genre';
import PageNotFound from './pages/404/PageNotFound';
import Details from './pages/details/Details';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import VerifyEmail from './pages/auth/VerifyEmail';
import UserPanel from './pages/panels/user/UserPanel';
import ForgetPass from './pages/auth/ForgetPass';
import AuthContext from './contexts/authContext';
import { newToken } from './api/usersApi';
import Loader from './components/common/Loader';
import GoUp from './components/common/Buttons/GoUp';

function App() {
  const { isLoggedIn } = useContext(AuthContext);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  // useEffect(() => {
  //   let intervalId;
  //   if (isLoggedIn) {
  //     intervalId = setInterval(async () => {
  //       const data = await newToken();
  //       setCookie('access-token', data.access, 5);
  //     }, 120000);
  //   }
  //   return () => clearInterval(intervalId);
  // });

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    window.addEventListener('load', () => setLoading(false));
    return () => window.removeEventListener('load', () => setLoading(false));
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="w-full min-h-screen flex flex-col relative dark:bg-slate-800 text-black dark:text-white bg-slate-50 font-fanum transition">
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
            <Route exact path="/genre/:name/" element={<Genre />} />
            {!isLoggedIn ? (
              <>
                <Route exact path="/login/" element={<Login />} />
                <Route exact path="/signup/" element={<Signup />} />
                <Route exact path="/verify-email/" element={<VerifyEmail />} />
                <Route
                  exact
                  path="/forget-password/"
                  element={<ForgetPass />}
                />
              </>
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
