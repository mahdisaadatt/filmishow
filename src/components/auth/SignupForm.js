import React, { useState, useContext } from 'react';
import { Form, Formik } from 'formik';
import Field from '../common/Field/Default';
import DefaultBtn from '../common/Buttons/Default';
import { yupSignupSchema } from '../../schemas';
import { signupUser, loginUser } from '../../api/usersApi';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../contexts/authContext';
import { setCookie } from '../../utils/js';

const SignupForm = () => {
  const [errMsg, setErrMsg] = useState('');
  const { setLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const onSubmit = async (
    { fullName, username, email, password, passwordConfirmation },
    actions
  ) => {
    try {
      const response = await signupUser(
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
      } catch (err) {
        if (!err?.loginResponse) {
          setErrMsg('اتصال خود را بررسی کنید.');
        } else {
          setErrMsg('وارد نشدید!');
        }
      }
      navigate('/panel/user/');
      actions.resetForm();
    } catch (err) {
      if (!err?.log) {
        setErrMsg('لطفا اتصال خود را بررسی کنید');
      } else if (err.response?.status === 409) {
        setErrMsg('این نام کاربری قبلا برداشته شده!');
      } else {
        setErrMsg('ثبت نام موفقیت آمیز نبود.');
      }
    }
  };
  return (
    <Formik
      initialValues={{
        fullName: '',
        username: '',
        email: '',
        password: '',
        passwordConfirmation: '',
      }}
      validationSchema={yupSignupSchema}
      onSubmit={onSubmit}
    >
      <Form className="flex flex-col justify-center w-96 h-full py-8">
        <h1 className="font-yekan-bold text-xl">ثبت نام کنید</h1>
        <div className="flex flex-col my-4">
          {errMsg ? (
            <p className="text-red-600 py-2 text-lg font-yekan-bold">
              {errMsg}
            </p>
          ) : null}
          <Field type="text" placeholder="نام کامل" name="fullName" />
          <Field type="text" placeholder="نام کاربری" name="username" />
          <Field type="email" placeholder="ایمیل" name="email" />
          <Field type="password" placeholder="رمز عبور" name="password" />
          <Field
            type="password"
            placeholder="تکرار رمز عبور"
            name="passwordConfirmation"
          />
        </div>
        <div className="sm:flex justify-end w-full">
          <DefaultBtn
            type="submit"
            title="ثبت نام"
            size="sm:w-20 w-full h-12"
            btnStyle="border-blue-600 hover:bg-blue-500 bg-blue-600"
            textColor="text-white hover:text-white"
          />
        </div>
      </Form>
    </Formik>
  );
};

export default SignupForm;
