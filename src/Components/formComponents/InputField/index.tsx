import React, {memo, useMemo, useState} from 'react';
import {Image, Text, View, TouchableOpacity} from 'react-native';
import {TextInput, TouchableRipple} from 'react-native-paper';
import styles from './index.style';
import {InputFieldInterface} from '../../../utils/interfaces';
import {
  responsiveHeightWrtScreen,
  responsiveWidthWrtScreen,
} from '../../../utils/responsiveHelper';
import Colors from '../../../utils/colors';
import {ImagesAssets} from '../../../utils/imageAssets';
import CustomLeftIcon from '../../CustomLeftIcon';

import {useNavigation} from '@react-navigation/native';
import {Constants} from '../../../utils/constants';

const CustomRightIcon = () => {
  const navigation = useNavigation<any>();
  return (
    <View style={styles.rightIconContainer}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(Constants.navigationScreens.ForgotPassword);
        }}>
        <Text style={[styles.textLabel, styles.forgot]}>Forgot?</Text>
      </TouchableOpacity>
    </View>
  );
};

export function InputField(props: InputFieldInterface) {
  return (
    <View
      style={[
        // styles.inputFieldContainer,
        {
          marginBottom: responsiveHeightWrtScreen(props.errors ? 1 : 2),
          width: responsiveWidthWrtScreen(props.width ? props.width : 84),
        },
      ]}>
      <TextInput
        outlineColor={Colors.white}
        theme={{
          colors: {
            primary: Colors.white,
          },
          roundness: 8,
        }}
        label={<Text style={styles.textLabel}>{props.label}</Text>}
        value={props.value?.toString()}
        mode="outlined"
        right={
          props.rightIcon === 'forgot' && (
            <TextInput.Icon
              icon={CustomRightIcon}
              style={styles.rightIconContainer}
            />
           
          )
        }
        left={
          props.leftIcon &&
          (props.customLeftIcon ? (
            <CustomLeftIcon leftIcon={props.leftIcon} />
          ) : (
            <TextInput.Icon
              icon={props.leftIcon}
              style={styles.leftIconContainer}
              size={20}
            />
          ))
        } // Render left icon if it exists
        outlineStyle={styles.outlineStyle}
        keyboardType={props.isNumField ? 'numeric' : 'default'}
        onChangeText={props.handleChange(props.name)}
        style={[
          styles.inputField,
          {
            width: responsiveWidthWrtScreen(props.width ? props.width : 84),
            height: responsiveHeightWrtScreen(props.height ? props.height : 5),
          },
        ]}
      />
      {props.errors && (
        <Text style={styles.error}> {props.errors as string}</Text>
      )}
    </View>
  );
}
