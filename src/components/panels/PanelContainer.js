import React from 'react';
import { Link } from 'react-router-dom';
import Default from '../common/Buttons/Default';

const PanelContainer = ({ data }) => {
  return (
    <div>
      <h1 className="text-xl">داشبورد</h1>
      <div className="m-2">
        <p>آیدی شما : {data.user_id}</p>
        <p>نام کامل : {data.full_name}</p>
        <p>نام کاربری : {data.username}</p>
      </div>
      <Link to="/forget-password/">
        <Default title="تغییر رمز عبور" size="w-24 h-10" />
      </Link>
    </div>
  );
};

export default PanelContainer;
