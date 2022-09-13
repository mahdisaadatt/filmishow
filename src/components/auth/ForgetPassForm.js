import React from 'react';
import { Form, Formik } from 'formik';
import Field from '../common/Field/Default';
import DefaultBtn from '../common/Buttons/Default'
import { yupForgetPassSchema } from '../../schemas';

const ForgetPassForm = () => {
  const onSubmit = async (values, actions) => {
    console.log(values);
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={{ email: '' }}
      validationSchema={yupForgetPassSchema}
      onSubmit={onSubmit}
    >
      <Form className="flex flex-col justify-center w-96 h-full py-8">
        <h1 className="font-yekan-bold text-xl">فراموشی رمز عبور</h1>
        <div className="flex flex-col my-4">
          <Field type="email" placeholder="ایمیل" name="email" />
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
      </Form>
    </Formik>
  );
};

export default ForgetPassForm;
