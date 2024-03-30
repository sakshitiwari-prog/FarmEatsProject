import React, { useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles, buttonStyle } from "./index.style";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Formik } from "formik";
import { postRequest } from "../../../utils/axios";
import { urls } from "../../../utils/Helpers/urlHelper";
import { saveDataToStorage } from "../../../utils/storage";
import { Constants } from "../../../utils/constants";
import {
  LoginSchema,
  OtpVerifySchema,
} from "../../../utils/Helpers/formikSchema";
import OtpInput from "../../../Components/OtpInput";
import { Button } from "react-native-paper";
import Colors from "../../../utils/colors";
import ErrorModal from "../../../Components/errorModal";
import { ImagesAssets } from "../../../utils/imageAssets";
import { SafeAreaView } from "react-native-safe-area-context";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const BussinessScheduleScreen = () => {
  const [error, setError] = useState({ isError: false, msg: "" });
  const [activeDay, setActiveDay] = useState({ label: "M", value: "mon" });
  const [businessHrsList, setBusinessHrsList] = useState([
    { mon: [] },
    { tue: [] },
    { wed: [] },
    { thu: [] },
    { fri: [] },
    { sat: [] },
    { sun: [] },
  ]);
  const route = useRoute();
  const UserInfo = route.params?.data;
  const navigation = useNavigation<any>();

  const onSubmitBtnClickHandler = async () => {
    let newBusinessHrsList: { [key: string]: any } = {};
    let index = 0;
    businessHrsList.forEach((business: any) => {
      const dayOfWeek = Object.keys(business)[0];
      if (business[dayOfWeek].length > 0) {
        newBusinessHrsList[dayOfWeek] = business[dayOfWeek];
        index++;
      }
    });

    const sendData = {
      ...UserInfo,
      business_hours: newBusinessHrsList,
      device_token: "0imfnc8mVLWwsAawjYr4Rx-Af50DDqtlx",
      type: "email/facebook/google/apple",
      social_id: "0imfnc8mVLWwsAawjYr4Rx-Af50DDqtlx",
    };
    postRequest(urls.signup, sendData)
      .then(async (res: any) => {
        if (res.success) {
          try {
            navigation.navigate(Constants.navigationScreens.SignUpSuccessful);
          } catch (error) {
            setError({ isError: true, msg: Constants.others.wentWrong });
          }
        } else {
          setError({ isError: true, msg: res.message });
        }
      })
      .catch((err) => {
        setError({ isError: true, msg: Constants.others.wentWrong });
      });
  };

  const onBusinessHrsClickHandler = (hrs: any) => {
    let newBusinessHrsList = [...businessHrsList]; // Copy the array to avoid mutating the original
    newBusinessHrsList.forEach((business: any) => {
      const dayOfWeek = Object.keys(business)[0];
      if (activeDay.value == dayOfWeek) {
        if (business[dayOfWeek].includes(hrs)) {
          // Check if hrs exists in the array
          let filteredBusinessHrsList = business[dayOfWeek].filter(
            (businessHrs: any) => hrs != businessHrs
          );
          business[dayOfWeek] = filteredBusinessHrsList;
        } else {
          business[dayOfWeek].push(hrs);
        }
      }
    });
    setBusinessHrsList(newBusinessHrsList);
  };

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
                  BussinessName: "",
                  informalName: "",
                  streetAdd: "",
                  city: "",
                  zipcode: "",
                }}
                onSubmit={(values) => onSubmitBtnClickHandler()}
              >
                {({ handleChange, handleSubmit, values, errors }) => (
                  <View style={styles.contentContainer}>
                    <View>
                      <Text
                        style={[styles.noAccountQuesn, styles.signUpPageCount]}
                      >
                        {Constants.BussinessScheduleScreen.businessContent}
                      </Text>

                      <View style={styles.verifyContent}>
                        <View style={styles.businessDaysContentContainer}>
                          {Constants.BusinessDays.map((day, index) => {
                            // Initialize isHrsSelected to false for each iteration
                            var isHrsSelected = false;

                            // Check if hours are selected for the current day
                            businessHrsList.forEach((businessDay: any) => {
                              const dayOfWeek = Object.keys(businessDay)[0];
                              if (
                                dayOfWeek === day.value &&
                                businessDay[dayOfWeek].length > 0
                              ) {
                                isHrsSelected = true; // Update isHrsSelected if hours are selected for this day
                              }
                            });

                            return (
                              <TouchableOpacity
                                key={index}
                                onPress={() => {
                                  setActiveDay({
                                    label: day.label,
                                    value: day.value,
                                  });
                                }}
                              >
                                <View
                                  style={[
                                    styles.dayContainer,
                                    {
                                      backgroundColor:
                                        activeDay.value == day.value
                                          ? Colors.primary
                                          : isHrsSelected
                                          ? Colors.inputFieldBg
                                          : Colors.white,
                                      borderColor:
                                        activeDay.value == day.value
                                          ? Colors.primary
                                          : Colors.inputFieldBg,
                                      borderWidth: 1,
                                    },
                                  ]}
                                >
                                  <Text
                                    style={{
                                      color:
                                        activeDay.value == day.value
                                          ? Colors.white
                                          : isHrsSelected
                                          ? Colors.black
                                          : Colors.dotColor,
                                    }}
                                  >
                                    {day.value}
                                  </Text>
                                </View>
                              </TouchableOpacity>
                            );
                          })}
                        </View>

                        <View style={styles.businessHrsContentContainer}>
                          {Constants.Businesshrs.map((hrs, index) => {
                            let isHrsSelected;
                            businessHrsList.forEach((business: any) => {
                              const dayOfWeek = Object.keys(business)[0];
                              if (activeDay.value == dayOfWeek) {
                                if (business[dayOfWeek].includes(hrs)) {
                                  // Check if hrs exists in the array
                                  isHrsSelected = true;
                                } else {
                                  isHrsSelected = false;
                                }
                              }
                            });
                            return (
                              <TouchableOpacity
                                key={index}
                                onPress={() => {
                                  onBusinessHrsClickHandler(hrs);
                                }}
                              >
                                <View
                                  style={[
                                    styles.BusinessHrsContainer,
                                    {
                                      backgroundColor: isHrsSelected
                                        ? Colors.thirdSlideBgColor
                                        : Colors.inputFieldBg,
                                    },
                                  ]}
                                >
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
                        }}
                      >
                        <Button
                          labelStyle={buttonStyle.label}
                          mode={"contained"}
                          textColor={Colors.black}
                          buttonColor={Colors.primary}
                          style={[buttonStyle.button]}
                        >
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
            onCloseModel={() => setError({ isError: false, msg: "" })}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default BussinessScheduleScreen;
