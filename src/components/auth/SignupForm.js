import React, { useState } from 'react';
import { Form, Formik } from 'formik';
import Field from '../common/Field/Default';
import DefaultBtn from '../common/Buttons/Default';
import { yupSignupSchema } from '../../schemas';
import { getVerifyUserCode } from '../../api/usersApi';
import { useNavigate } from 'react-router-dom';

const SignupForm = () => {
  const [errMsg, setErrMsg] = useState('');
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const navigate = useNavigate();
  const onSubmit = async (
    { fullName, username, email, password, passwordConfirmation },
    actions
  ) => {
    setLoading(true);
    setDisabled(true);
    try {
      const res = await getVerifyUserCode(email);
      navigate('/verify-email/', {
        state: { fullName, username, email, password, passwordConfirmation },
      });
      actions.resetForm();
    } catch (err) {
      setLoading(false);
      setDisabled(false);
      setErrMsg('لطفا اتصالات خود را بررسی کنید!');
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
      <Form className="flex flex-col justify-center w-96 h-full px-6 py-10 gap-3 dark:bg-slate-700 bg-slate-200 rounded-lg my-10">
        <h1 className="font-yekan-bold text-xl">ثبت نام کنید</h1>
        {loading ? (
          <p className="text-lg font-yekan-bold">در حال آماده سازی کد ...</p>
        ) : null}
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
            disabled={disabled}
            btnStyle={`${
              disabled
                ? 'bg-gray-600 border-gray-600 hover:bg-gray-500 cursor-not-allowed'
                : 'border-blue-600 hover:bg-blue-500 bg-blue-600'
            }`}
            textColor="text-white hover:text-white"
          />
        </div>
      </Form>
    </Formik>
  );
};

export default SignupForm;
