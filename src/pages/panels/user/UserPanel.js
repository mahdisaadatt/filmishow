import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../../../contexts/authContext';
import Loader from '../../../components/common/Loader';

const UserPanel = () => {
  const { authTokens } = useContext(AuthContext);
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
      <h1>داشبورد</h1>
      <p>User Id : {authTokens.user_id}</p>
    </div>
  );
};

export default UserPanel;
