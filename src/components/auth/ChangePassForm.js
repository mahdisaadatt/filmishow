import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Form, Formik } from 'formik';
import Field from '../common/Field/Default';
import DefaultBtn from '../common/Buttons/Default';
import { confirmNewPass } from '../../api/usersApi';
import { yupChangePassSchema } from '../../schemas';

const ChangePassForm = () => {
  const [errMsg, setErrMsg] = useState('');
  const navigate = useNavigate();
  const { state } = useLocation();
  const { token } = state;
  // mahdi.developer1@gmail.com
  console.log(token);
  const onSubmit = async ({ password }, actions) => {
    try {
      const response = await confirmNewPass(password, token);
      actions.resetForm();
      navigate('/');
    } catch (err) {
      if (!err?.response) {
        setErrMsg('اتصال خود را بررسی کنید.');
      } else {
        setErrMsg('عملیات موفق آمیز نبود!');
      }
    }
  };

  return (
    <Formik
      initialValues={{ password: '', passwordConfirmation: '' }}
      validationSchema={yupChangePassSchema}
      onSubmit={onSubmit}
    >
      <Form className="flex flex-col justify-center w-96 h-full px-6 py-10 gap-6 dark:bg-slate-700 bg-slate-200 rounded-lg my-10">
        <h1 className="font-yekan-bold text-xl">رمز عبور جدید</h1>
        <div className="my-4 w-auto">
          {errMsg ? (
            <p className="text-red-600 py-2 text-lg font-yekan-bold">
              {errMsg}
            </p>
          ) : null}
          <Field type="password" placeholder="رمز عبور" name="password" />
          <Field
            type="password"
            placeholder="تکرار رمز عبور"
            name="passwordConfirmation"
          />
        </div>
        <div className="w-full flex sm:justify-end justify-between gap-2">
          <div className="w-full sm:w-20 h-12">
            <DefaultBtn
              type="submit"
              title="تکمیل"
              size="w-full h-full"
              btnStyle="border-blue-600 hover:bg-blue-500 bg-blue-600"
              textColor="text-white hover:text-white"
            />
          </div>
        </div>
      </Form>
    </Formik>
  );
};

export default ChangePassForm;
