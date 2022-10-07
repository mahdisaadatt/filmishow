import * as yup from 'yup';

export const yupLoginSchema = yup.object().shape({
  username: yup.string().required('نام کاربری را وارد کنید.'),
  password: yup
    .string()
    .min(8, 'رمز عبور حداقل باید 8 کاراکتر داشته باشد.')
    .matches(/[a-zA-Z]/, 'رمز باید بین Aa تا Zz باشد.')
    .required('رمز عبور را وارد کنید.'),
});

export const yupSignupSchema = yup.object().shape({
  fullName: yup.string().required('نام کامل خود را وارد کنید'),
  username: yup.string().required('نام کاربری را وارد کنید.'),
  email: yup.string().email().required('ایمیل خود را وارد کنید.'),
  password: yup
    .string()
    .min(8, 'رمز عبور حداقل باید 8 کاراکتر داشته باشد.')
    .matches(/[a-zA-Z]/, 'رمز باید بین Aa تا Zz باشد.')
    .required('رمز عبور را وارد کنید.'),
  passwordConfirmation: yup
    .string()
    .min(8, 'رمز عبور حداقل باید 8 کاراکتر داشته باشد.')
    .matches(/[a-zA-Z]/, 'رمز باید بین Aa تا Zz باشد.')
    .required('تکرار رمز عبور را وارد کنید.')
    .oneOf([yup.ref('password'), null], 'رمز عبور برابر نیست'),
});

export const yupForgetPassSchema = yup.object().shape({
  email: yup.string().email().required('ایمیل خود را وارد کنید.'),
});

export const yupChangePassSchema = yup.object().shape({
  password: yup
    .string()
    .min(8, 'رمز عبور حداقل باید 8 کاراکتر داشته باشد.')
    .matches(/[a-zA-Z]/, 'رمز باید بین Aa تا Zz باشد.')
    .required('رمز عبور را وارد کنید.'),
  passwordConfirmation: yup
    .string()
    .min(8, 'رمز عبور حداقل باید 8 کاراکتر داشته باشد.')
    .matches(/[a-zA-Z]/, 'رمز باید بین Aa تا Zz باشد.')
    .required('تکرار رمز عبور را وارد کنید.')
    .oneOf([yup.ref('password'), null], 'رمز عبور برابر نیست'),
});
