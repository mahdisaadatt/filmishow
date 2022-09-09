import React from 'react';
import Field from '../common/Field/Default';
import DefaultBtn from '../common/Buttons/Default';
import NeuralBtn from '../common/Buttons/Neural';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  return (
    <form
      className="flex flex-col justify-center w-96 h-full py-8"
      onSubmit={e => e.preventDefault()}
    >
      <h1 className="font-yekan-bold text-xl">ورود به حساب کاربری</h1>
      <div className="flex flex-col my-4">
        <Field type="email" title="نام کاربری یا ایمیل" />
        <Field type="password" title="رمز عبور" />
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
    </form>
  );
};

export default LoginForm;
