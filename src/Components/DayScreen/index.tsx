import React, {useState, useRef, useEffect} from 'react';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {View, Text, Dimensions, Image} from 'react-native';
import Colors from '../../utils/colors';
import {
  responsiveFontSize,
  responsiveHeightWrtScreen,
  responsiveWidthWrtScreen,
} from '../../utils/responsiveHelper';
import {ImagesAssets} from '../../utils/imageAssets';
import {styles} from './index.style';
import {Constants} from '../../utils/constants';
import {Button} from 'react-native-paper';
import {TouchableOpacity} from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

const DayScreen = () => {
  return (
    <View
      style={{
        display: "flex",
        width: responsiveWidthWrtScreen(100),
        height: responsiveHeightWrtScreen(30),
        backgroundColor: "yellow",
      }}
    >
      <Text>yh</Text>
      {/* {Constants.Businesshrs.map((hrs, index) => {
      return (
        <TouchableOpacity key={index} onPress={() => {}}>
          <View
            style={[
              styles.BusinessHrsContainer,
              {
                backgroundColor:
                // activeDay.value!=''
                //   ? Colors.activeBusinessHrs
                //   : 
                  Colors.inputFieldBg,
              },
            ]}
          >
            <Text style={styles.BusinessHrsContent}>
              {hrs}
            </Text>
          </View>
        </TouchableOpacity>
      );
    })} */}
    </View>
  );
};

export default DayScreen;
