import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {styles, buttonStyle} from './index.style';

import {useNavigation} from '@react-navigation/native';
import {Constants} from '../../utils/constants';
import {Button} from 'react-native-paper';
import Colors from '../../utils/colors';
import {Formik} from 'formik';
import {InputField} from '../../Components/formComponents/InputField';
import {FogotPassSchema, LoginSchema} from '../../utils/Helpers/formikSchema';
import {postRequest} from '../../utils/axios';
import {urls} from '../../utils/Helpers/urlHelper';
import ErrorModal from '../../Components/errorModal';
import {saveDataToStorage} from '../../utils/storage';
import MyCarousel from '../../Components/Caraousal';
import Slider from '../../Components/Caraousal';
import {ImagesAssets} from '../../utils/imageAssets';
const ForgotPasswordScreen = () => {
  const [error, setError] = useState({isError: false, msg: ''});

  const navigation = useNavigation<any>();
  const onSubmitBtnClickHandler = async (values: any) => {
    (values);

    const sendData = {
      mobile: values.phoneNo,
    };

    postRequest(urls.forgotPassword, sendData)
      .then(async (res: any) => {

        if (res.success) {
          try {
            setError({isError: true, msg: res.message});
            navigation.navigate(Constants.navigationScreens.OtpVerification);
      
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
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <Text style={styles.header}>{Constants.others.FarmerEats}</Text>
        <View style={styles.upperPart}>
          <Text style={styles.greetingsMsg}>
            {Constants.ForgotPasswordScreen.forgotPassTitle}
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
            validationSchema={FogotPassSchema}
            initialValues={{phoneNo: ''}}
            onSubmit={values => onSubmitBtnClickHandler(values)}>
            {({handleChange, handleSubmit, values, errors}) => (
              <View>
                <InputField
                  name={'phoneNo'}
                  label={Constants.ForgotPasswordScreen.phoneNo}
                  value={values.phoneNo}
                  handleChange={handleChange}
                  errors={errors.phoneNo}
                  leftIcon={'phone-outline'}
                />
                <TouchableOpacity
                  onPress={() => {
                    handleSubmit();
                    // navigation.navigate(Constants.navigationScreens.OtpVerification);
                  }}>
                  <Button
                    labelStyle={buttonStyle.label}
                    mode={'contained'}
                    textColor={Colors.black}
                    buttonColor={Colors.primary}
                    style={[buttonStyle.button]}>
                    {Constants.ForgotPasswordScreen.sendCode}
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
  );
};

export default ForgotPasswordScreen;
