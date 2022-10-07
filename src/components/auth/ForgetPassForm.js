import React, { useState } from 'react';
import { Form, Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import Field from '../common/Field/Default';
import DefaultBtn from '../common/Buttons/Default';
import Otp from '../common/Field/Otp';
import { getPassResetCode, validatePassResetCode } from '../../api/usersApi';
import { yupForgetPassSchema } from '../../schemas';
import { Link } from 'react-router-dom';

const ForgetPassForm = () => {
  const [errMsg, setErrMsg] = useState('');
  const [msg, setMsg] = useState('');
  const [disabled, setDisabled] = useState(true);
  const navigate = useNavigate();
  const [token, setToken] = useState('');
  const onSubmit = async ({ email }) => {
    setMsg('در حال آماده سازی کد ...');
    try {
      const response = await getPassResetCode(email);
      setDisabled(false);
      setMsg('');
    } catch (err) {
      setMsg('');
      setErrMsg(err.message);
    }
  };
  const onSendCode = async () => {
    setMsg('در حال راستی ازمایی کد...');
    try {
      const response = await validatePassResetCode(token);
      setMsg('');
      navigate('/change-password/', { state: { token } });
    } catch (err) {
      setMsg('');
      setErrMsg(err.message);
    }
  };
  return (
    <Formik
      initialValues={{ email: '' }}
      validationSchema={yupForgetPassSchema}
      onSubmit={onSubmit}
    >
      <Form className="flex flex-col justify-center w-[30rem] h-full px-6 py-10 gap-3 dark:bg-slate-700 bg-slate-200 rounded-lg my-10">
        <h1 className="font-yekan-bold text-xl">فراموشی رمز عبور</h1>
        <p className="text-lg font-yekan-bold">{msg}</p>
        <div className="my-2 w-full">
          {errMsg ? (
            <p className="text-red-600 py-2 text-lg font-yekan-bold">
              {errMsg}
            </p>
          ) : null}
          <div className="flex sm:justify-between justify-evenly w-full gap-3">
            <Field
              type="email"
              placeholder="ایمیل"
              name="email"
              size="sm:w-[20rem] w-full"
            />
            <DefaultBtn
              type="submit"
              title="دریافت کد"
              size="sm:w-1/3 w-[5rem] h-10"
              btnStyle="border-blue-600 hover:bg-blue-500 bg-blue-600"
              textColor="text-white hover:text-white"
            />
          </div>
          <div
            className="flex sm:justify-between justify-evenly w-full gap-2"
            style={{ direction: 'ltr' }}
          >
            <div className="w-5/6 h-10" onClick={onSendCode}>
              <DefaultBtn
                type="button"
                title="تایید کد"
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
            <Otp onChange={token => setToken(token)} />
          </div>
        </div>
      </Form>
    </Formik>
  );
};

export default ForgetPassForm;
