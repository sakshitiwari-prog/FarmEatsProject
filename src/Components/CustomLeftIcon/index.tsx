import React, {useEffect} from 'react';
import {View, Image} from 'react-native';

import {ImagesAssets} from '../../utils/imageAssets';

import {styles} from './index.style';
type LeftIconType =
  | 'apple'
  | 'fb'
  | 'Forgot'
  | 'google'
  | 'firstSlid'
  | 'secondSlid'
  | 'thirdSlid'
  | 'back'
  | 'arrow'
  | 'bussinessName';

const CustomLeftIcon = (props: {leftIcon: LeftIconType}) => {
  const leftIconSource = ImagesAssets[props.leftIcon];
  

  return (
    <View style={styles.customIconContainer}>
      <Image style={[styles.Icons]} source={leftIconSource} />
    </View>
  );
};

export default CustomLeftIcon;
