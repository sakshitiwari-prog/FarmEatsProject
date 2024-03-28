import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {styles, buttonStyle} from './index.style';

import {useNavigation} from '@react-navigation/native';

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
import Slider from '../../../Components/Caraousal';
import {SafeAreaView} from 'react-native-safe-area-context';

const SignUpSuccessfulScreen = () => {
  const [error, setError] = useState({isError: false, msg: ''});

  const navigation = useNavigation<any>();
 

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.mainContainer}>
          <View style={styles.middlePart}>
            <View style={styles.lowerPart}>
              <View style={styles.contentContainer}>
                <View style={styles.successfulContentContainer}>
                  <Image style={[styles.check]} source={ImagesAssets.check} />
                  <Text style={styles.successfulPrimaryMsg}>
                    {Constants.SignUpSuccessfulScreen.successfulPrimaryMsg}
                  </Text>
                  <Text style={[styles.noAccountQuesn, styles.signUpPageCount]}>
                    {Constants.SignUpSuccessfulScreen.successfulSecMsg}
                  </Text>
                </View>

                <View style={styles.actionContainer}>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate(Constants.navigationScreens.Login);
                    }}>
                    <Button
                      labelStyle={buttonStyle.label}
                      mode={'contained'}
                      textColor={Colors.black}
                      buttonColor={Colors.primary}
                      style={[buttonStyle.button]}>
                      {Constants.SignUpSuccessfulScreen.got}
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
            onCloseModel={() => setError({isError: false, msg: ''})}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default SignUpSuccessfulScreen;
