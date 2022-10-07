import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../../../contexts/authContext';
import Loader from '../../../components/common/Loader';
import Default from '../../../components/common/Buttons/Default';
import { Link } from 'react-router-dom';

const AdminPanel = () => {
  const { accessToken } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  if (loading) {
    return <Loader />;
  }
  return (
    <div>
      <h1 className="text-xl">داشبورد</h1>
      <div className="m-2">
        <p>آیدی شما : {accessToken.user_id}</p>
        <p>نام کامل : {accessToken.full_name}</p>
        <p>نام کاربری : {accessToken.username}</p>
        <p>آیا ادمین هستید ؟ {accessToken.is_superuser ? 'بله' : 'خیر'}</p>
      </div>
      <Link to="/forget-password/">
        <Default title="تغییر رمز عبور" size="w-24 h-10" />
      </Link>
    </div>
  );
};

export default AdminPanel;
