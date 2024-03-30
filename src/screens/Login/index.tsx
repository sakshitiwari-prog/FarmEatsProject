import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {styles, buttonStyle} from './index.style';

import {useNavigation} from '@react-navigation/native';
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
import {SafeAreaView} from 'react-native-safe-area-context';
const LoginScreen = () => {
  const [error, setError] = useState({isError: false, msg: ''});

  const navigation = useNavigation<any>();
  const onSubmitBtnClickHandler = async (values: any) => {

    const sendData = {
      email: values.email,
      password: values.password,
      role: 'farmer',
      device_token: '0imfnc8mVLWwsAawjYr4Rx-Af50DDqtlx',
      type: 'email/facebook/google/apple',
      social_id: '0imfnc8mVLWwsAawjYr4Rx-Af50DDqtlx',
    };

    postRequest(urls.login, sendData)
      .then(async (res: any) => {

        if (res.success) {
          try {
            setError({isError: true, msg: res.message});
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
              {Constants.LoginSingUpScreen.greetingsMsg}
            </Text>
            <View style={styles.quesn}>
              <Text style={[styles.noAccountQuesn, styles.signUpPageCount]}>
                {Constants.LoginSingUpScreen.noAccountQuesn}
              </Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.replace(Constants.navigationScreens.SignUpScreens);
                }}>
                <Text style={styles.signUpNow}>
                  {Constants.LoginSingUpScreen.createAccount}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.middlePart}>
            <Formik
              validationSchema={LoginSchema}
              initialValues={{email: '', password: ''}}
              onSubmit={values => onSubmitBtnClickHandler(values)}>
              {({handleChange, handleSubmit, values, errors}) => (
                <View>
                  <InputField
                    name={'email'}
                    label={Constants.LoginSingUpScreen.email}
                    value={values.email}
                    handleChange={handleChange}
                    errors={errors.email}
                    leftIcon={'at'}
                  />
                  <InputField
                    name={'password'}
                    label={Constants.LoginSingUpScreen.password}
                    value={values.password}
                    handleChange={handleChange}
                    errors={errors.password}
                    rightIcon={'forgot'}
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
                      {Constants.LoginSingUpScreen.login}
                    </Button>
                  </TouchableOpacity>
                  <View style={styles.loginOption}>
                    <Text style={styles.noAccountQuesn}>
                      {Constants.LoginSingUpScreen.loginOption}
                    </Text>
                  </View>
                </View>
              )}
            </Formik>
          </View>
          <View style={styles.lowerContainer}>
            <View style={styles.lowerPart}>
              <View style={styles.iconContainer}>
                <Image
                  style={[styles.socialIcons]}
                  source={ImagesAssets.google}
                />
              </View>
              <View style={styles.iconContainer}>
                <Image
                  style={[styles.socialIcons]}
                  source={ImagesAssets.apple}
                />
              </View>
              <View style={styles.iconContainer}>
                <Image style={[styles.socialIcons]} source={ImagesAssets.fb} />
              </View>
            </View>
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

export default LoginScreen;
