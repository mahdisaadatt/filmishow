import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Formik } from 'formik';
import Field from '../common/Field/Default';
import DefaultBtn from '../common/Buttons/Default';
import NeuralBtn from '../common/Buttons/Neural';
import { Link } from 'react-router-dom';
import { yupLoginSchema } from '../../schemas';
import AuthContext from '../../contexts/authContext';
import { loginUser } from '../../api/usersApi';
import Loader from '../common/Loader';
import { setCookie } from '../../utils/js';

const LoginForm = () => {
  const { setLoggedIn } = useContext(AuthContext);
  // const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState('');
  const navigate = useNavigate();
  const onSubmit = async ({ username, password }, actions) => {
    try {
      const response = await loginUser(username, password);
      setLoggedIn(true);
      setCookie('auth-tokens', JSON.stringify(response.data), 5);
      navigate('/panel/user/');
      actions.resetForm();
    } catch (err) {
      if (!err?.response) {
        setErrMsg('اتصال خود را بررسی کنید.');
      } else if (err.response?.status === 400) {
        setErrMsg('نام کاربری یا رمز عبور خود را وارد نکردید.');
      } else if (err.response?.status === 401) {
        setErrMsg('نام کاربری یا رمز عبور اشتباه است!');
      } else {
        setErrMsg('وارد نشدید!');
      }
    }
  };

  return (
    <Formik
      initialValues={{ username: '', password: '' }}
      validationSchema={yupLoginSchema}
      onSubmit={onSubmit}
    >
      <Form className="flex flex-col justify-center w-96 h-full py-8">
        <h1 className="font-yekan-bold text-xl">ورود به حساب کاربری</h1>
        <div className="flex flex-col my-4">
          {errMsg ? (
            <p className="text-red-600 py-2 text-lg font-yekan-bold">
              {errMsg}
            </p>
          ) : null}
          <Field type="text" placeholder="نام کاربری" name="username" />
          <Field type="password" placeholder="رمز عبور" name="password" />
          <Link to="/forget-password/">
            <NeuralBtn
              title="آیا رمز عبور خود را فراموش کرده اید؟"
              className="text-sm"
            />
          </Link>
        </div>
        <div className="w-full flex sm:justify-end justify-between gap-2">
          <div className="w-1/2 sm:w-20 h-12">
            <DefaultBtn
              type="submit"
              title="ورود"
              size="w-full h-full"
              btnStyle="border-blue-600 hover:bg-blue-600"
              textColor="text-blue-600 hover:text-white"
            />
          </div>
          <div className="w-1/2 sm:w-20">
            <Link to="/signup/">
              <DefaultBtn
                type="button"
                title="ثبت نام"
                size="w-full h-full"
                btnStyle="border-blue-600 hover:bg-blue-500 bg-blue-600"
                textColor="text-white hover:text-white"
              />
            </Link>
          </div>
        </div>
      </Form>
    </Formik>
  );
};

export default LoginForm;
