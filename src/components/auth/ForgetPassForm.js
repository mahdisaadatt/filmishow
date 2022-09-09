import React from 'react';
import Field from '../common/Field/Default';
import DefaultBtn from '../common/Buttons/Default';
import { Link } from 'react-router-dom';

const ForgetPassForm = () => {
  return (
    <form
      className="flex flex-col justify-center w-96 h-full py-8"
      onSubmit={e => e.preventDefault()}
    >
      <h1 className="font-yekan-bold text-xl">فراموشی رمز عبور</h1>
      <div className="flex flex-col my-4">
        <Field type="email" title="ایمیل" />
      </div>
      <div className="w-full flex sm:justify-end justify-between gap-2">
        <div className="w-full sm:w-36 h-12">
          <DefaultBtn
            type="submit"
            title="ارسال ایمیل بازیابی"
            size="w-full h-full"
            btnStyle="border-blue-600 hover:bg-blue-600"
            textColor="text-blue-600 hover:text-white"
          />
        </div>
      </div>
    </form>
  );
};

export default ForgetPassForm;
