import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {styles, buttonStyle} from './index.style';

import {useNavigation,useRoute} from '@react-navigation/native';
import {Constants} from '../../utils/constants';
import {Button} from 'react-native-paper';
import Colors from '../../utils/colors';
import {Formik} from 'formik';
import {InputField} from '../../Components/formComponents/InputField';
import {LoginSchema} from '../../utils/Helpers/formikSchema';
import {postRequest} from '../../utils/axios';
import {urls} from '../../utils/Helpers/urlHelper';
import ErrorModal from '../../Components/errorModal';
import {saveDataToStorage} from '../../utils/storage';
import MyCarousel from '../../Components/Caraousal';
import Slider from '../../Components/Caraousal';
import {ImagesAssets} from '../../utils/imageAssets';
import { SafeAreaView } from 'react-native-safe-area-context';
const PasswordResetScreen = () => {
  const [error, setError] = useState({isError: false, msg: ''});
  const route = useRoute();
  const UserInfo = route.params?.data;

  const navigation = useNavigation<any>();
  const onSubmitBtnClickHandler = async (values: any) => {
    console.log(values,UserInfo);

    const sendData = {
      token: UserInfo,
      password: values.password,
      cpassword:values.newPassword
    };
   

    postRequest(urls.resetPass, sendData)
      .then(async (res: any) => {
        console.log(res, '------------------');

        if (res.success) {
          try {
            setError({isError: true, msg: res.message});
            navigation.navigate(Constants.navigationScreens.Login);
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
  };

  return (
    <SafeAreaView>
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <Text style={styles.header}>{Constants.others.FarmerEats}</Text>
        <View style={styles.upperPart}>
          <Text style={styles.greetingsMsg}>
            {Constants.PasswordResetScreen.resetPassTitle}
          </Text>
          <View style={styles.quesn}>
          <Text style={[styles.noAccountQuesn,styles.signUpPageCount]}>
            
              {Constants.ForgotPasswordScreen.forgotPassQuesn}
              
            </Text>
            <TouchableOpacity
                onPress={() => {
                  navigation.replace(Constants.navigationScreens.Login);
                }}>
                <Text style={styles.signUpNow}>
                  {Constants.LoginSingUpScreen.login}
                </Text>
              </TouchableOpacity>
          </View>
        </View>
        <View style={styles.middlePart}>
          <Formik
            // validationSchema={pas}
            initialValues={{newPassword: '', password: ''}}
            onSubmit={values => { 
              console.log(values);
              
              onSubmitBtnClickHandler(values)}}>
            {({handleChange, handleSubmit, values, errors}) => (
              <View>
                 <InputField
                  name={'password'}
                  label={Constants.LoginSingUpScreen.password}
                  value={values.password}
                  handleChange={handleChange}
                  errors={errors.password}
                  leftIcon={'lock-outline'}
                />
                <InputField
                  name={'newPassword'}
                  label={Constants.LoginSingUpScreen.newPassword}
                  value={values.newPassword}
                  handleChange={handleChange}
                  errors={errors.newPassword}
                  leftIcon={'lock-outline'}
                />
                <TouchableOpacity
                  onPress={() => {
                    handleSubmit();
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

export default PasswordResetScreen;
