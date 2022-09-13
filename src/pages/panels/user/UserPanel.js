import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../../../contexts/authContext';
import Loader from '../../../components/common/Loader';

const UserPanel = () => {
  let { authTokens } = useContext(AuthContext);
  const [loading, setLoading] = useState(authTokens ? false : true);
  if (loading) {
    return <Loader />;
  }
  return <div>User Id : {authTokens.user_id}</div>;
};

export default UserPanel;
