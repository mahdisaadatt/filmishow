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
import { setCookie } from '../../utils/js';

const LoginForm = () => {
  const { setLoggedIn } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [errMsg, setErrMsg] = useState('');
  const navigate = useNavigate();
  const onSubmit = async ({ username, password }, actions) => {
    setLoading(true);
    setDisabled(true);
    try {
      const response = await loginUser(username, password);
      setLoggedIn(true);
      setCookie('access-token', response.data.access, 5);
      setCookie('refresh-token', response.data.refresh, 5);
      actions.resetForm();
      navigate('/');
    } catch (err) {
      setLoading(false);
      setDisabled(false);
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
      <Form className="flex flex-col justify-center w-96 h-full px-6 py-10 gap-6 dark:bg-slate-700 bg-slate-200 rounded-lg my-10">
        <h1 className="font-yekan-bold text-xl">ورود به حساب کاربری</h1>
        {loading ? (
          <p className="text-lg font-yekan-bold">در حال انتقال ...</p>
        ) : null}
        <div className="my-4 w-auto">
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
              disabled={disabled}
              btnStyle={`${
                disabled
                  ? 'bg-gray-600 border-gray-600 hover:bg-gray-500 cursor-not-allowed'
                  : 'border-blue-600 hover:bg-blue-500 bg-blue-600'
              }`}
              textColor="text-white hover:text-white"
            />
          </div>
          <div className="w-1/2 sm:w-20">
            <Link to="/signup/">
              <DefaultBtn
                type="button"
                title="ثبت نام"
                size="w-full h-full"
                disabled={disabled}
                btnStyle="border-blue-600 hover:bg-blue-600"
                textColor="text-blue-600 hover:text-white"
              />
            </Link>
          </div>
        </div>
      </Form>
    </Formik>
  );
};

export default LoginForm;
