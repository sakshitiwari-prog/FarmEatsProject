import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {styles, buttonStyle} from './index.style';

import {useNavigation} from '@react-navigation/native';
import {Button} from 'react-native-paper';
import {Formik} from 'formik';
import {postRequest} from '../../../utils/axios';
import {urls} from '../../../utils/Helpers/urlHelper';
import {saveDataToStorage} from '../../../utils/storage';
import {Constants} from '../../../utils/constants';
import {
  LoginSchema,
  SignUpUserInfoSchema,
} from '../../../utils/Helpers/formikSchema';
import ErrorModal from '../../../Components/errorModal';
import {InputField} from '../../../Components/formComponents/InputField';
import {ImagesAssets} from '../../../utils/imageAssets';
import Colors from '../../../utils/colors';
import {SafeAreaView} from 'react-native-safe-area-context';
const UserInfoScreen = () => {
  const [error, setError] = useState({isError: false, msg: ''});

  const navigation = useNavigation<any>();
  const onSubmitBtnClickHandler = async (values: any) => {
    const sendData = {
      full_name: values.fullName,
      email: values.email,
      password: values.password,
      phone: `+${values.phoneNo.toString()}`,
      role: 'farmer',
    };
    navigation.navigate(Constants.navigationScreens.FarmInfo, {data: sendData});
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.mainContainer}>
          <Text style={styles.header}>{Constants.others.FarmerEats}</Text>
          <View style={styles.upperPart}>
            <Text style={[styles.noAccountQuesn, styles.signUpPageCount]}>
              {Constants.others.signUp} 1 of 4
            </Text>
            <Text style={styles.greetingsMsg}>
              {Constants.UserInfoScreen.greetMsg}
            </Text>
          </View>
          <View style={styles.middlePart}>
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
            <View style={styles.loginOption}>
              <Text style={styles.noAccountQuesn}>
                {Constants.LoginSingUpScreen.loginOption}
              </Text>
            </View>
          </View>
          <View style={[styles.lowerPart,]}>
            <Formik
              validationSchema={SignUpUserInfoSchema}
              initialValues={{
                fullName: '',
                email: '',
                phoneNo: '',
                password: '',
                rePassword: '',
              }}
              onSubmit={values => onSubmitBtnClickHandler(values)}>
              {({handleChange, handleSubmit, values, errors}) => (
                <View >
                  <InputField
                    name={'fullName'}
                    label={Constants.UserInfoScreen.fullName}
                    value={values.fullName}
                    handleChange={handleChange}
                    errors={errors.fullName}
                    leftIcon={'account-outline'}
                  />
                  <InputField
                    name={'email'}
                    label={Constants.LoginSingUpScreen.email}
                    value={values.email}
                    handleChange={handleChange}
                    errors={errors.email}
                    leftIcon={'at'}
                  />
                  <InputField
                    name={'phoneNo'}
                    label={Constants.ForgotPasswordScreen.phoneNo}
                    value={values.phoneNo}
                    handleChange={handleChange}
                    errors={errors.phoneNo}
                    leftIcon={'phone-outline'}
                  />
                  <InputField
                    name={'password'}
                    label={Constants.LoginSingUpScreen.password}
                    value={values.password}
                    handleChange={handleChange}
                    errors={errors.password}
                    leftIcon={'lock-outline'}
                  />
                  <InputField
                    name={'rePassword'}
                    label={Constants.UserInfoScreen.rePassword}
                    value={values.rePassword}
                    handleChange={handleChange}
                    errors={errors.rePassword}
                    leftIcon={'lock-outline'}
                  />
                  <View style={styles.actionContainer}>
                    <TouchableOpacity
                      onPress={() => {
                      navigation.navigate(Constants.navigationScreens.Login)
                      }}>
                      <Text style={[styles.resend]}>
                        {Constants.LoginSingUpScreen.login}
                      </Text>
                    </TouchableOpacity>
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
                        {Constants.others.continue}
                      </Button>
                    </TouchableOpacity>
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

export default UserInfoScreen;
