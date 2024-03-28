import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {styles, buttonStyle} from './index.style';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Formik} from 'formik';
import {postRequest} from '../../../utils/axios';
import {urls} from '../../../utils/Helpers/urlHelper';
import {saveDataToStorage} from '../../../utils/storage';
import {Constants} from '../../../utils/constants';
import {
  LoginSchema,
  OtpVerifySchema,
} from '../../../utils/Helpers/formikSchema';
import OtpInput from '../../../Components/OtpInput';
import {Button} from 'react-native-paper';
import Colors from '../../../utils/colors';
import ErrorModal from '../../../Components/errorModal';
import {ImagesAssets} from '../../../utils/imageAssets';
import {SafeAreaView} from 'react-native-safe-area-context';

const BussinessScheduleScreen = () => {
  const [error, setError] = useState({isError: false, msg: ''});
  const [activeDay, setActiveDay] = useState({label: 'M', value: 'mon'});
  const route = useRoute();
  const UserInfo = route.params?.data;
  const navigation = useNavigation<any>();
  const onSubmitBtnClickHandler = async () => {
    const sendData = {
      ...UserInfo,
      business_hours: {
        mon: ['8:00am - 10:00am', '10:00am - 1:00pm'],
        tue: ['8:00am - 10:00am', '10:00am - 1:00pm'],
        wed: ['8:00am - 10:00am', '10:00am - 1:00pm', '1:00pm - 4:00pm'],
        thu: ['8:00am - 10:00am', '10:00am - 1:00pm', '1:00pm - 4:00pm'],
        fri: ['8:00am - 10:00am', '10:00am - 1:00pm'],
        sat: ['8:00am - 10:00am', '10:00am - 1:00pm'],
        sun: ['8:00am -10:00am'],
      },
      device_token: '0imfnc8mVLWwsAawjYr4Rx-Af50DDqtlx',
      type: 'email/facebook/google/apple',
      social_id: '0imfnc8mVLWwsAawjYr4Rx-Af50DDqtlx',
    };
    postRequest(urls.signup, sendData)
      .then(async (res: any) => {
        console.log(res.success, '------------------');

        if (res.success) {
          try {
            navigation.navigate(Constants.navigationScreens.SignUpSuccessful);
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

  // "business_hours": {
  //   "mon": [
  //     "8:00am - 10:00am",
  //     "10:00am - 1:00pm"
  //   ],
  //   "tue": [
  //     "8:00am - 10:00am",
  //     "10:00am - 1:00pm"
  //   ],
  //   "wed": [
  //     "8:00am - 10:00am",
  //     "10:00am - 1:00pm",
  //     "1:00pm - 4:00pm"
  //   ],
  //   "thu": [
  //     "8:00am - 10:00am",
  //     "10:00am - 1:00pm",
  //     "1:00pm - 4:00pm"
  //   ],
  //   "fri": [
  //     "8:00am - 10:00am",
  //     "10:00am - 1:00pm"
  //   ],
  //   "sat": [
  //     "8:00am - 10:00am",
  //     "10:00am - 1:00pm"
  //   ],
  //   "sun": [
  //     "8:00am -10:00am"
  //   ]
  // },
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.mainContainer}>
          <Text style={styles.header}>{Constants.others.FarmerEats}</Text>
          <View style={styles.upperPart}>
            <Text style={[styles.noAccountQuesn, styles.signUpPageCount]}>
              {Constants.others.signUp} 4 of 4
            </Text>
            <Text style={styles.greetingsMsg}>
              {Constants.BussinessScheduleScreen.businessTitle}
            </Text>
          </View>
          <View style={styles.middlePart}>
            <View style={styles.lowerPart}>
              <Formik
                validationSchema={LoginSchema}
                initialValues={{
                  BussinessName: '',
                  informalName: '',
                  streetAdd: '',
                  city: '',
                  zipcode: '',
                }}
                onSubmit={values => onSubmitBtnClickHandler(values)}>
                {({handleChange, handleSubmit, values, errors}) => (
                  <View style={styles.contentContainer}>
                    <View>
                      <Text
                        style={[styles.noAccountQuesn, styles.signUpPageCount]}>
                        {Constants.BussinessScheduleScreen.businessContent}
                      </Text>

                      <View style={styles.verifyContent}>
                        <View style={styles.businessDaysContentContainer}>
                          {Constants.BusinessDays.map((day, index) => {
                            return (
                              <TouchableOpacity
                                key={index}
                                onPress={() => {
                                  setActiveDay({
                                    label: day.label,
                                    value: day.value,
                                  });
                                }}>
                                <View
                                  style={[
                                    styles.dayContainer,
                                    {
                                      backgroundColor: activeDay
                                        ? Colors.primary
                                        : Colors.inputFieldBg,
                                    },
                                  ]}>
                                  <Text
                                    style={{
                                      color: activeDay
                                        ? Colors.white
                                        : Colors.black,
                                    }}>
                                    {day.label}
                                  </Text>
                                </View>
                              </TouchableOpacity>
                            );
                          })}
                        </View>
                        <View style={styles.businessHrsContentContainer}>
                          {Constants.Businesshrs.map((hrs, index) => {
                            return (
                              <TouchableOpacity key={index} onPress={() => {}}>
                                <View
                                  style={[
                                    styles.BusinessHrsContainer,
                                    {
                                      backgroundColor: activeDay
                                        ? Colors.activeBusinessHrs
                                        : Colors.inputFieldBg,
                                    },
                                  ]}>
                                  <Text style={styles.BusinessHrsContent}>
                                    {hrs}
                                  </Text>
                                </View>
                              </TouchableOpacity>
                            );
                          })}
                        </View>
                      </View>
                    </View>
                    <View style={styles.actionContainer}>
                      <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image
                          style={[styles.Icons]}
                          source={ImagesAssets.back}
                        />
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() => {
                          onSubmitBtnClickHandler();
                        }}>
                        <Button
                          labelStyle={buttonStyle.label}
                          mode={'contained'}
                          textColor={Colors.black}
                          buttonColor={Colors.primary}
                          style={[buttonStyle.button]}>
                          {Constants.BussinessScheduleScreen.signUp}
                        </Button>
                      </TouchableOpacity>
                    </View>
                  </View>
                )}
              </Formik>
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

export default BussinessScheduleScreen;
