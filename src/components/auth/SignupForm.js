import React from 'react';
import Field from '../common/Field/Default';
import DefaultBtn from '../common/Buttons/Default';
import { Link } from 'react-router-dom';

const SignupForm = () => {
  return (
    <form
      className="flex flex-col justify-center w-96 h-full py-8"
      onSubmit={e => e.preventDefault()}
    >
      <h1 className="font-yekan-bold text-xl">ثبت نام کنید</h1>
      <div className="flex flex-col my-4">
        <Field type="text" title="نام کاربری" />
        <Field type="email" title="ایمیل" />
        <Field type="password" title="رمز عبور" />
        <Field type="password" title="تکرار رمز عبور" />
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
    </form>
  );
};

export default SignupForm;
