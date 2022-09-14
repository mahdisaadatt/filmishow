import { useEffect, useState, useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loader from './components/common/Loader';
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer';
import Landing from './pages/landing/Landing';
import Genre from './pages/category/Genre';
import PageNotFound from './pages/404/PageNotFound';
import MovieDetails from './pages/details/MovieDetails';
import SeriesDetails from './pages/details/SeriesDetails';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import UserPanel from './pages/panels/user/UserPanel';
import ForgetPass from './pages/auth/ForgetPass';
import AuthContext from './contexts/authContext';

function App() {
  const { isLoggedIn } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
  if (loading) {
    return <Loader />;
  }
  return (
    <div className="w-full min-h-screen flex flex-col relative dark:bg-slate-800 text-black dark:text-white bg-slate-50 font-fanum transition">
      <Header />
      <div className="mx-0 p-2">
        <div className="w-full h-full max-w-screen-xl mx-auto">
          <Routes>
            <Route exact path="/" element={<Landing />} />
            <Route exact path="*" element={<PageNotFound />} />
            <Route exact path="/search/:q/" element={<Landing />} />
            <Route exact path="/movie/:id/" element={<MovieDetails />} />
            <Route exact path="/series/:id/" element={<SeriesDetails />} />
            <Route exact path="/genre/:name/" element={<Genre />} />
            {!isLoggedIn ? (
              <>
                <Route exact path="/login/" element={<Login />} />
                <Route exact path="/signup/" element={<Signup />} />
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
