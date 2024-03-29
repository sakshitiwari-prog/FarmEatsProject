import React, {useEffect, useState} from 'react';
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
import DocumentPicker from 'react-native-document-picker';
import {SafeAreaView} from 'react-native-safe-area-context';
const UserVerificationScreen = () => {
  const [error, setError] = useState({isError: false, msg: ''});
  const route = useRoute();
  const UserInfo = route.params?.data;
  const [pickedFile, setPickedFile] = useState(null);

  const pickDocument = async () => {
    if (!pickedFile) {
      try {
        const res = await DocumentPicker.pick({
          type: [DocumentPicker.types.pdf],
        });
        setPickedFile(res);
      } catch (err) {
        if (DocumentPicker.isCancel(err)) {
          console.log('User cancelled the picker');
        } else {
          console.log('Error while picking the file:', err);
        }
      }
    }
  };

  console.log('a====================================');
  console.log(UserInfo);
  console.log('====================jj================');
  const navigation = useNavigation<any>();
  const onSubmitBtnClickHandler = async () => {
    // if(pickedFile){
      const sendData = {
      ...UserInfo,
      // registration_proof: pickedFile,
    };
    navigation.navigate(Constants.navigationScreens.BussinessSchedule, {
      data: sendData,
    });
  // }
  };
  useEffect(() => {
    console.log(pickedFile, 'pickedFile');
  }, [pickedFile]);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.mainContainer}>
          <Text style={styles.header}>{Constants.others.FarmerEats}</Text>
          <View style={styles.upperPart}>
            <Text style={[styles.noAccountQuesn, styles.signUpPageCount]}>
              {Constants.others.signUp} 3 of 4
            </Text>
            <Text style={styles.greetingsMsg}>
              {Constants.UserVerificationScreen.verification}
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
                        {Constants.UserVerificationScreen.verifyContent}
                      </Text>

                      <View style={styles.verifyContent}>
                        <Text style={styles.proof}>
                          {Constants.UserVerificationScreen.proofAttach}
                        </Text>
                        <TouchableOpacity onPress={pickDocument}>
                          <Image
                            style={[
                              styles.camera,
                              {opacity: pickedFile ? 0.6 : 1},
                            ]}
                            source={ImagesAssets.camera}
                          />
                        </TouchableOpacity>
                      </View>
                      {pickedFile && (
                        <View style={styles.pickedFileContainer}>
                          <Text style={styles.pdfName}>
                            {pickedFile[0].name}
                          </Text>
                          <TouchableOpacity
                            onPress={() => {
                              setPickedFile(null);
                            }}>
                            <Image
                              source={ImagesAssets.cross}
                              style={[styles.cross]}></Image>
                          </TouchableOpacity>
                        </View>
                      )}
                    </View>
                    <View style={styles.actionContainer}>
                      <TouchableOpacity
                        onPress={() => {
                          navigation.goBack();
                        }}>
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
                          {Constants.others.continue}
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

export default UserVerificationScreen;
