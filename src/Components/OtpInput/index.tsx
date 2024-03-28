import * as React from 'react';
import {TextInput as RNTextInput} from 'react-native-paper';

import Colors from '../../utils/colors';
import {
  responsiveHeightWrtScreen,
  responsiveWidthWrtScreen,
} from '../../utils/responsiveHelper';
import styles from './index.style';

const OtpInput = (props: any) => {
  const {length = 6, otpSubmitFunc} = props;
  const [otp, setOTP] = React.useState(Array(length).fill(''));

  const otpInputs: React.RefObject<typeof RNTextInput>[] = React.useMemo(
    () =>
      Array(length)
        .fill(0)
        .map(() => React.createRef<typeof RNTextInput>()),
    [length],
  );
  const [focusedIndex, setFocusedIndex] = React.useState(-1);

  const handleOTPChange = (text, index) => {
    const newOTP = [...otp];
    newOTP[index] = text;
    setOTP(newOTP);

    // Move focus to the next input
    if (text !== '' && index < length - 1) {
      otpInputs[index + 1].current?.focus();
    }
  };
  React.useEffect(() => {
    otpSubmitFunc(otp);
  }, [otp]);

  const handleFocus = index => {
    setFocusedIndex(index);
  };
  return (
    <>
      {otp.map((value, index) => {
        return (
          <RNTextInput
            key={index}
            outlineColor={Colors.white}
            theme={{
              colors: {
                primary: Colors.white,
              },
              roundness: 8,
            }}
            value={value}
            mode="outlined"
            outlineStyle={[
              styles.outlineStyle,
              {
                borderColor:
                  focusedIndex === index ? Colors.primary : Colors.white,
              }, // Apply border color when focused
            ]}
            keyboardType="numeric"
            maxLength={1}
            onFocus={() => handleFocus(index)}
            onBlur={() => setFocusedIndex(-1)} // Reset focusedIndex on blur
            ref={otpInputs[index]}
            onChangeText={text => handleOTPChange(text, index)}
            style={[
              styles.inputField,
              {
                width: responsiveWidthWrtScreen(props.width ? props.width : 84),
                height: responsiveHeightWrtScreen(
                  props.height ? props.height : 6,
                ),
              },
            ]}
          />
        );
      })}
    </>
  );
};

export default OtpInput;
