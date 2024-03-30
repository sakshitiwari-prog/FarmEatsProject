import React, { useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles, buttonStyle } from "./index.style";

import { useNavigation, useRoute } from "@react-navigation/native";
import { Button } from "react-native-paper";
import { Formik, useFormik } from "formik";
import { postRequest } from "../../../utils/axios";
import { urls } from "../../../utils/Helpers/urlHelper";
import { saveDataToStorage } from "../../../utils/storage";
import { Constants } from "../../../utils/constants";
import {
  FarmInfoSchema,
  LoginSchema,
} from "../../../utils/Helpers/formikSchema";
import ErrorModal from "../../../Components/errorModal";
import { InputField } from "../../../Components/formComponents/InputField";
import { ImagesAssets } from "../../../utils/imageAssets";
import Colors from "../../../utils/colors";

import DropDown from "react-native-paper-dropdown";
import axios from "axios";
import {
  responsiveFontSize,
  responsiveHeightWrtScreen,
  responsiveWidthWrtScreen,
} from "../../../utils/responsiveHelper";
import { SafeAreaView } from "react-native-safe-area-context";
const FarmInfoScreen = () => {
  const [error, setError] = useState({ isError: false, msg: "" });
  const [showDropDown, setShowDropDown] = useState(false);
  const route = useRoute();
  const UserInfo = route.params?.data;

  const [state, setState] = useState("");
  const stateList = [
    {
      label: "Assam",
      value: "Assam",
    },
    {
      label: "Bihar",
      value: "Bihar",
    },
    {
      label: "Goa",
      value: "Goa",
    },
    {
      label: "UP",
      value: "UP",
    },

    {
      label: "Byram",
      value: "Byram",
    },
    {
      label: "Wyoming",
      value: "Wyoming",
    },
  ];

  const navigation = useNavigation<any>();
  const onSubmitBtnClickHandler = async (values: any) => {
    const sendData = {
      ...UserInfo,
      business_name: values.BussinessName,
      informal_name: values.informalName,
      address: values.streetAdd,
      city: values.city,
      state: values.state,
      zip_code: values.zipcode,
    };
    navigation.navigate(Constants.navigationScreens.UserVerification, {
      data: sendData,
    });
  };
  let initialValue = {
    BussinessName: "",
    informalName: "",
    streetAdd: "",
    city: "",
    state: "",
    zipcode: "",
  };
  const formikProps = useFormik({
    initialValues: initialValue,
    onSubmit: onSubmitBtnClickHandler,
    validationSchema: FarmInfoSchema,
  });
  useEffect(() => {
    formikProps.setFieldValue("state", state);
  }, [state]);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.mainContainer}>
          <Text style={styles.header}>{Constants.others.FarmerEats}</Text>
          <View style={styles.upperPart}>
            <Text style={[styles.noAccountQuesn, styles.signUpPageCount]}>
              {Constants.others.signUp} 2 of 4
            </Text>
            <Text style={styles.greetingsMsg}>
              {Constants.FarmInfoScreen.farmInfoTitle}
            </Text>
          </View>
          <View style={styles.middlePart}>
            <View style={styles.lowerPart}>
              <View style={styles.contentContainer}>
                <View>
                  <InputField
                    name={"BussinessName"}
                    label={Constants.UserInfoScreen.bussinessName}
                    value={formikProps.values.BussinessName}
                    handleChange={formikProps.handleChange}
                    errors={formikProps.errors.BussinessName}
                    // customLeftIcon={true}
                    leftIcon={"label-outline"}
                  />
                  <InputField
                    name={"informalName"}
                    label={Constants.UserInfoScreen.informalName}
                    value={formikProps.values.informalName}
                    handleChange={formikProps.handleChange}
                    errors={formikProps.errors.informalName}
                    leftIcon={"emoticon-happy-outline"}
                  />
                  <InputField
                    name={"streetAdd"}
                    // customLeftIcon={true}
                    label={Constants.UserInfoScreen.streetAdd}
                    value={formikProps.values.streetAdd}
                    handleChange={formikProps.handleChange}
                    errors={formikProps.errors.streetAdd}
                    leftIcon={"home-outline"}
                  />
                  <InputField
                    name={"city"}
                    label={Constants.UserInfoScreen.city}
                    value={formikProps.values.city}
                    handleChange={formikProps.handleChange}
                    errors={formikProps.errors.city}
                    leftIcon={"map-marker-outline"}
                  />
                  <View style={styles.locationContainer}>
                    <View
                      style={{
                        flexDirection: "col",
                        // alignItems: 'center',
                        position: "relative",
                        // backgroundColor:Colors.accent,
                        width: responsiveWidthWrtScreen(30),
                        height: responsiveHeightWrtScreen(6),
                      }}
                    >
                      <DropDown
                        mode={"outlined"}
                        dropDownStyle={styles.dropdown}
                        activeColor={Colors.black}
                        inputProps={{
                          style: [
                            {
                              fontFamily: "BeVietnamPro-Regular",
                              fontSize: responsiveFontSize(14),
                              backgroundColor: Colors.inputFieldBg,
                              width: responsiveWidthWrtScreen(30),
                              height: responsiveHeightWrtScreen(5),
                              // backgroundColor: Colors.white,
                              marginBottom: responsiveHeightWrtScreen(0),
                            },
                          ],
                        }}
                        theme={{
                          colors: {
                            primary: "red", // Change the label color
                            outline: Colors.white, // Change the border color
                            // You can customize more colors if needed
                          },
                        }}
                        dropDownItemSelectedStyle={styles.selectedItem}
                        dropDownItemStyle={styles.item}
                        dropDownItemTextStyle={styles.itemText}
                        label={
                          <Text style={{ color: Colors.backDropColor }}>
                            {Constants.UserInfoScreen.state}
                          </Text>
                        }
                        visible={showDropDown}
                        showDropDown={() => setShowDropDown(true)}
                        onDismiss={() => setShowDropDown(false)}
                        value={state}
                        setValue={setState}
                        list={stateList}
                      />
                      <TouchableOpacity
                        onPress={() => setShowDropDown(!showDropDown)}
                      >
                        <Image
                          style={{
                            right: responsiveWidthWrtScreen(4),
                            top: -responsiveHeightWrtScreen(3.1),
                            width: 10,
                            height: 10,
                            position: "absolute",
                            zIndex: 1,

                            objectFit: "contain",
                          }}
                          source={ImagesAssets.arrow} // Provide the path to your right icon
                        />
                      </TouchableOpacity>
                      {formikProps.values.state === "" && (
                        <Text style={styles.error}>
                          {Constants.others.stateError}
                        </Text>
                      )}
                    </View>

                    <InputField
                      name={"zipcode"}
                      width={50}
                      label={Constants.UserInfoScreen.zipcode}
                      value={formikProps.values.zipcode}
                      handleChange={formikProps.handleChange}
                      errors={formikProps.errors.zipcode}
                    />
                  </View>
                </View>
                <View style={styles.actionContainer}>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.goBack();
                    }}
                  >
                    <Image style={[styles.Icons]} source={ImagesAssets.back} />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      formikProps.handleSubmit();
                    }}
                  >
                    <Button
                      labelStyle={buttonStyle.label}
                      mode={"contained"}
                      textColor={Colors.black}
                      buttonColor={Colors.primary}
                      style={[buttonStyle.button]}
                    >
                      {Constants.others.continue}
                    </Button>
                  </TouchableOpacity>
                </View>
              </View>
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

export default FarmInfoScreen;
