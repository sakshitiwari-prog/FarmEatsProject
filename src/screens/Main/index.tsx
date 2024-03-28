import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {ImagesAssets} from '../../utils/imageAssets';
import {styles, buttonStyle} from './index.style';

import {Constants} from '../../utils/constants';
import {Button} from 'react-native-paper';
import Colors from '../../utils/colors';
import Slider from '../../Components/Caraousal';
import {SafeAreaView} from 'react-native-safe-area-context';
const MainScreen = ({navigation}: any) => {
  const [option, setOption] = useState({
    login: true,
    signUp: false,
  });

  const onBtnClickHandler = (btnLabel: string) => {
    if (btnLabel === Constants.LoginSingUpScreen.login) {
      setOption({login: true, signUp: false});
      navigation.navigate(Constants.navigationScreens.SignUpScreens);
    } else {
      setOption({login: true, signUp: false});
      navigation.navigate(Constants.navigationScreens.SignUp);
    }
  };
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Slider navigation={navigation} />
      </View>
    </SafeAreaView>
  );
};

export default MainScreen;
