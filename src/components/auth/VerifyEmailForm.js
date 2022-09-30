import React, { useContext, useState } from 'react';
import { sendCode, loginUser, signupUser } from '../../api/usersApi';
import AuthContext from '../../contexts/authContext';
import { setCookie } from '../../utils/js';
import { useNavigate, useLocation } from 'react-router-dom';

import DefaultButton from '../common/Buttons/Default';

const VerifyEmailForm = () => {
  const [value, setValue] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const { setLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const { state } = useLocation();
  const { fullName, username, email, password, passwordConfirmation } = state;

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const validationResponse = await sendCode(email, value);
      try {
        const signupResponse = await signupUser(
          fullName,
          username,
          email,
          password,
          passwordConfirmation
        );
        try {
          const loginResponse = await loginUser(username, password);
          setLoggedIn(true);
          setCookie('access-token', loginResponse.data.access, 5);
          setCookie('refresh-token', loginResponse.data.refresh, 5);
          navigate('/panel/user/');
        } catch (err) {
          if (!err?.loginResponse) {
            setErrMsg('اتصال خود را بررسی کنید.');
          } else {
            setErrMsg('وارد نشدید!');
          }
        }
      } catch (err) {
        if (!err?.log) {
          setErrMsg('لطفا اتصال خود را بررسی کنید');
        } else if (err.response?.status === 409) {
          setErrMsg('این نام کاربری قبلا برداشته شده!');
        } else {
          setErrMsg('ثبت نام موفقیت آمیز نبود.');
        }
      }
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <form
      className="flex flex-col justify-center w-96 h-full px-6 py-10 gap-6 dark:bg-slate-700 bg-slate-200 rounded-lg my-10"
      onSubmit={onSubmit}
    >
      <h1>کد تایید را که برایتان ایمیل شد وارد کنید.</h1>
      <input
        placeholder="کد تایید..."
        value={value}
        onChange={e => setValue(e.target.value)}
        className={`form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border-2 border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 dark:focus:border-blue focus:outline-none`}
      />
      <p>{errMsg}</p>
      <div className="sm:flex justify-end w-full">
        <DefaultButton
          type="submit"
          title="تایید ایمیل"
          size="sm:w-20 w-full h-12"
          btnStyle="border-blue-600 hover:bg-blue-500 bg-blue-600"
          textColor="text-white hover:text-white"
        />
      </div>
    </form>
  );
};

export default VerifyEmailForm;
