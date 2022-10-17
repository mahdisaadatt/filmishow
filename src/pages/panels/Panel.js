import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../../contexts/authContext';
import Loader from '../../components/common/Loader';
import PanelContainer from '../../components/panels/PanelContainer';

const Panels = () => {
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
  return <PanelContainer data={accessToken} />;
};

export default Panels;
