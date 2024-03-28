import Colors from "./colors";
import { ImagesAssets } from "./imageAssets";

export const Constants = {
  navigationScreens: {
    Main: 'main',
    Login: 'login',
    QuoteHistory: 'quoteHistory',
    Profile: 'profile',
    Home: 'home',
    SignUp: 'signUp',
    SignUpScreens: 'SignUpScreens',
    SPLASH: 'splash',
    OtpVerification: 'OtpVerification',
    AuthProvider: 'AuthProvider',
    ForgotPassword: 'ForgotPassword',
    PasswordReset: ' PasswordReset',
    UserInfo: 'UserInfo',
    FarmInfo: 'FarmInfo',
    UserVerification: 'UserVerification',
    BussinessSchedule: 'BussinessSchedule',
    SignUpSuccessful: 'SignUpSuccessful',
  },
  BussinessScheduleScreen: {
    businessTitle: 'Business Hours',
    businessContent:
      'Choose the hours your farm is open for pickups. This will allow customers to order deliveries.',
      signUp:'Signup'
  },
  
  SignUpSuccessfulScreen:{
    successfulPrimaryMsg:'You’re all done!',
    successfulSecMsg:'Hang tight!  We are currently reviewing your account and will follow up with you in 2-3 business days. In the meantime, you can setup your inventory.',
    got:'Got it!'
  },
  BusinessDays: [
    {
      label: 'M',
      value: 'mon',
    },
    {
      label: 'T',
      value: 'tue',
    },
    {
      label: 'W',
      value: 'wed',
    },
    {
      label: 'Th',
      value: 'thu',
    },
    {
      label: 'F',
      value: 'fri',
    },
    {
      label: 'S',
      value: 'sat',
    },
    {
      label: 'Su',
      value: 'sun',
    },
  ],
  Businesshrs:[
    '8:00am - 10:00am',
    '10:00am - 1:00pm',
    '1:00pm - 4:00pm',
    '4:00pm - 7:00pm',
    '7:00pm - 10:00pm'
  ],
  UserInfoScreen: {
    greetMsg: 'Welcome!',
    signUpMsg: 'or signup with',
    fullName: 'Full Name',
    rePassword: 'Re-enter Password',
    bussinessName: 'Business Name',
    informalName: 'Informal Name',
    streetAdd: 'street Address',
    city: 'City',
    state: 'state',
    zipcode: 'Enter Zipcode',
  },
  FarmInfoScreen: {
    farmInfoTitle: 'Farm Info',
    businessName: 'Business Name',
    streetAdd: 'Street Address',
    city: 'City',
    state: 'State',
    zipCode: 'Enter Zipcode',
  },
  UserVerificationScreen: {
    verification: 'Verification',
    verifyContent:
      'Attached proof of Department of Agriculture registrations i.e. Florida Fresh, USDA Approved, USDA Organic',
    proofAttach: 'Attach proof of registration',
    submit:'Submit'
  },
  others: {
    stateError:'*State is required',
    actionSplashBtnText:'Join the movement!',
    continue: 'Continue',
    FarmerEats: 'FarmerEats',
    logout: 'logout',
    success: 'Success',
    wentWrong: 'Something went wrong',
    noData: 'NO Data Found',
    loading: 'Loading....',
    reset: 'Password Reset Successfully',
    backToLogin: 'Back To Login',
    noQuotes: 'No Quotes available',
    signUp: 'Signup',
    error: 'error',
    errorTitle: 'Error',
    errorDescription: 'Oops, Something went wrong. Please try again later',
  },
  apiKey: {
    quoteSearchKey: '40YA0xgGFseeQ7tTerZ8NQ==87KDgZb25kWdnlLg',
  },
  ForgotPasswordScreen: {
    forgotPassTitle: 'Forgot Password?',
    forgotPassQuesn: 'Remember your pasword? ',
    phoneNo: 'Phone Number',
    sendCode: 'Send Code',
  },
  OtpVerificationScreen: {
    verifyOtp: 'Verify OTP',
    submit: 'Submit',
    resendCode: 'Resend Code',
  },
  PasswordResetScreen: {
    resetPassTitle: 'Reset Password',
  },
  LoginSingUpScreen: {
    name: 'Name',
    email: 'Email Address',
    password: 'Password',
    newPassword: 'Confirm New Password',
    login: 'Login',
    signUp: 'Sign Up',
    signUpNow: 'Sign Up',
    signInNow: 'Sign In',
    quoteGenerator: 'Quote-Generator',
    noAccountQuesn: 'New here? ',
    createAccount: 'Create account',
    accountExist: 'Already having an account? ',
    greetingsMsg: 'Welcome back!',
    loginOption: 'or login with',
  },
  slides : [
    {
      title: 'Quality',
      bgColor: Colors.firstSlideBgColor,
      BgImg: ImagesAssets.firstSlid,
      description:
        'Sell your farm fresh products directly to consumers, cutting out the middleman and reducing emissions of the global supply chain.',
    },
    {
      title: 'Convenient',
      bgColor: Colors.primary,
      BgImg: ImagesAssets.secondSlid,
      description:
        'Our team of delivery drivers will make sure your orders are picked up on time and promptly delivered to your customers.',
    },
    {
      title: 'Local',
      bgColor: Colors.thirdSlideBgColor,
      BgImg: ImagesAssets.thirdSlid,
      description:
        'We love the earth and know you do too! Join us in reducing our local carbon footprint one order at a time.',
    },
  ],
  HomeScreen: {
    greetings: 'Hi,',
    exclamationMark: '!',
    searchQuote: 'Search your quote',
  },
  ProfileScreen: {
    profile: 'Profile',
    save: 'Save ',
    email: 'Email',
    Password: 'Password',
  },
  quoteHistoryScreen: {
    quoteHistory: 'Quote History',
  },
};
