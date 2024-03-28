import * as Yup from 'yup';

export const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .max(40, 'Name should be less than 40 characters')
    .min(1, 'Name should be more than 1 characters')
    .required('*Please enter your name'),

  email: Yup.string()
    .email('*Please enter a valid email address')
    .required('*Please enter your email address'),
  password: Yup.string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      '*Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character',
    )
    .required('*Please enter your password'),
});
export const ProfileSchema = Yup.object().shape({
  name: Yup.string()
    .max(40, 'Name should be less than 40 characters')
    .min(1, 'Name should be more than 1 characters')
    .required('*Please enter your name'),

  email: Yup.string()
    .email('*Please enter a valid email address')
    .required('*Please enter your email address'),
});
export const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('*Please enter a valid email address')
    .required('*Please enter your email address'),
  password: Yup.string().required('*Please enter your password'),
});

export const FarmInfoSchema = Yup.object().shape({
  BussinessName: Yup.string()
    .max(40, '*Bussiness Name should be less than 40 characters')
    .min(1, '*Bussiness Name should be more than 1 characters')
    .required('*Please enter your name'),
  informalName: Yup.string()
    .max(40, '*Informal Name should be less than 40 characters')
    .min(1, '*Informal Name should be more than 1 characters')
    .required('*Please enter your name'),
  city: Yup.string().required('*Please enter your city'),
  streetAdd: Yup.string().required('*Please enter your street Address'),
  zipcode: Yup.number().required('*Please enter your zipcode'),
});
export const SignUpUserInfoSchema = Yup.object().shape({
  email: Yup.string()
    .email('*Please enter a valid email address')
    .required('*Please enter your email address'),
  password: Yup.string().required('*Please enter your password'),
  phoneNo: Yup.number()
    .typeError("*That doesn't look like a phone number")
    .positive("*A phone number can't start with a minus")
    .integer("*A phone number can't include a decimal point")
    .min(8)
    .required('A phone number is required'),
  fullName: Yup.string()
    .max(40, '*Name should be less than 40 characters')
    .min(1, '*Name should be more than 1 characters')
    .required('*Please enter your name'),
  rePassword: Yup.string().required('*Please enter your password again'),
});
export const FogotPassSchema = Yup.object().shape({
  phoneNo: Yup.number()
    .typeError("That doesn't look like a phone number")
    .positive("A phone number can't start with a minus")
    .integer("A phone number can't include a decimal point")
    .min(8)
    .required('A phone number is required'),
});

export const OtpVerifySchema = Yup.object().shape({
  otpField: Yup.string()
    .required('An OTP is required')
    .notOneOf([''], 'OTP must not be empty'), // Ensure OTP is not an empty string
});
