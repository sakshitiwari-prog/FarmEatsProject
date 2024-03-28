import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {styles, buttonStyle} from './index.style';

import {useNavigation} from '@react-navigation/native';
import {Constants} from '../../utils/constants';
import {Button} from 'react-native-paper';
import Colors from '../../utils/colors';
import {Formik} from 'formik';
import {InputField} from '../../Components/formComponents/InputField';
import {
  FogotPassSchema,
  LoginSchema,
  OtpVerifySchema,
} from '../../utils/Helpers/formikSchema';
import {postRequest} from '../../utils/axios';
import {urls} from '../../utils/Helpers/urlHelper';
import ErrorModal from '../../Components/errorModal';
import {saveDataToStorage} from '../../utils/storage';
import MyCarousel from '../../Components/Caraousal';
import Slider from '../../Components/Caraousal';
import {ImagesAssets} from '../../utils/imageAssets';
import OtpInput from '../../Components/OtpInput';
import { SafeAreaView } from 'react-native-safe-area-context';
const OtpVerificationScreen = () => {
  const [error, setError] = useState({isError: false, msg: ''});
  const [otp, setOTP] = React.useState();

  const navigation = useNavigation<any>();
  const onSubmitBtnClickHandler = async () => {
    let isEveryFull = otp.every(otpField => otpField != '');
    if (isEveryFull) {
      let otpVal = otp.join('');
      const sendData = {
        otp: otpVal,
      };
      postRequest(urls.otpVerify, sendData)
        .then(async (res: any) => {
          console.log(res, '------------------');

          if (res.success) {
            try {
              setError({isError: true, msg: res.message});
              navigation.navigate(Constants.navigationScreens.PasswordReset, {
                data: sendData,
              });
            } catch (error) {
              setError({isError: true, msg: Constants.others.wentWrong});
            }
          } else {
            setError({isError: true, msg: res.message});
          }
        })
        .catch(err => {
          setError({isError: true, msg: Constants.others.wentWrong});
        });
    }
  };
  function otpSubmitFunc(otp) {
    setOTP(otp);
    console.log('hy', otp);
  }
  return (
    <SafeAreaView>
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <Text style={styles.header}>{Constants.others.FarmerEats}</Text>
        <View style={styles.upperPart}>
          <Text style={styles.greetingsMsg}>
            {Constants.OtpVerificationScreen.verifyOtp}
          </Text>
          <View style={styles.quesn}>
            <Text style={[styles.noAccountQuesn, styles.signUpPageCount]}>
              {Constants.ForgotPasswordScreen.forgotPassQuesn}
              
            </Text>
            <TouchableOpacity
                onPress={() => {
                  navigation.replace(Constants.navigationScreens.SignUp);
                }}>
                <Text style={styles.signUpNow}>
                  {Constants.LoginSingUpScreen.login}
                </Text>
              </TouchableOpacity>
          </View>
        </View>
        <View style={styles.middlePart}>
          <Formik
            validationSchema={OtpVerifySchema}
            initialValues={{phoneNo: ''}}
            onSubmit={values => onSubmitBtnClickHandler(values)}>
            {({handleChange, handleSubmit, values, errors}) => (
              <View>
                <View style={styles.otpContainer}>
                  <OtpInput
                    width={12.5}
                    height={6.5}
                    length={6}
                    otpSubmitFunc={otp => otpSubmitFunc(otp)}></OtpInput>
                </View>
                <TouchableOpacity
                  onPress={() => {
                    // handleSubmit();
                    navigation.navigate(
                      Constants.navigationScreens.PasswordReset,
                      {data: '801801'},
                    );
                  }}>
                  <Button
                    labelStyle={buttonStyle.label}
                    mode={'contained'}
                    textColor={Colors.black}
                    buttonColor={Colors.primary}
                    style={[buttonStyle.button]}>
                    {Constants.OtpVerificationScreen.submit}
                  </Button>
                </TouchableOpacity>
                <View style={styles.loginOption}>
                  <Text style={[styles.noAccountQuesn, styles.resend]}>
                    {Constants.OtpVerificationScreen.resendCode}
                  </Text>
                </View>
              </View>
            )}
          </Formik>
        </View>
      </View>
      {error.isError && (
        <ErrorModal
          error={error.isError}
          msg={error.msg}
          onCloseModel={() => setError({isError: false, msg: ''})}
        />
      )}
    </View>
    </SafeAreaView>
  );
};

export default OtpVerificationScreen;
