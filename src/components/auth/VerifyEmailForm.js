import React, { useContext, useState } from 'react';
import { sendVerifyUserCode, loginUser, signupUser } from '../../api/usersApi';
import AuthContext from '../../contexts/authContext';
import { setCookie } from '../../utils/js';
import { useNavigate, useLocation } from 'react-router-dom';
import DefaultButton from '../common/Buttons/Default';
import Otp from '../common/Field/Otp';

const VerifyEmailForm = () => {
  const [errMsg, setErrMsg] = useState('');
  const [token, setToken] = useState('');
  const { setLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const { state } = useLocation();
  const { fullName, username, email, password, passwordConfirmation } = state;
  const [disabled, setDisabled] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    setDisabled(true);
    try {
      const validationResponse = await sendVerifyUserCode(email, token);
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
          navigate('/');
        } catch (err) {
          if (!err?.response) {
            setErrMsg('اتصال خود را بررسی کنید.');
          } else {
            setErrMsg('وارد نشدید!');
          }
        }
      } catch (err) {
        if (err.response.status === 409) {
          setErrMsg('این نام کاربری قبلا برداشته شده!');
        } else {
          setErrMsg('لطفا اتصال خود را بررسی کنید');
        }
      }
    } catch (err) {
      setLoading(false);
      setDisabled(false);
      setErrMsg('لطفا دوباره تلاش کنید');
    }
  };
  return (
    <form
      className="flex flex-col justify-center w-96 h-full px-6 py-10 gap-6 dark:bg-slate-700 bg-slate-200 rounded-lg my-10"
      onSubmit={onSubmit}
    >
      <h1>کد تایید را که برایتان ایمیل شد وارد کنید.</h1>
      {loading ? (
        <p className="text-lg font-yekan-bold">در حال راستی آزمایی کد ...</p>
      ) : null}
      {errMsg ? (
        <p className="text-red-600 text-lg font-yekan-bold">{errMsg}</p>
      ) : null}
      <div style={{ direction: 'ltr' }}>
        <Otp onChange={token => setToken(token)} />
      </div>
      <div className="sm:flex justify-end w-full">
        <DefaultButton
          type="submit"
          title="تایید ایمیل"
          size="sm:w-20 w-full h-12"
          btnStyle={`${
            disabled
              ? 'bg-gray-600 border-gray-600 hover:bg-gray-500 cursor-not-allowed'
              : 'border-blue-600 hover:bg-blue-500 bg-blue-600'
          }`}
          textColor="text-white hover:text-white"
        />
      </div>
    </form>
  );
};

export default VerifyEmailForm;
