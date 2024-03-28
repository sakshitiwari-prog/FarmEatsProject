import {StyleSheet} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeightWrtScreen,
  // responsiveHeightWrtScreen,
  responsiveWidthWrtScreen,
} from '../../utils/responsiveHelper';
import Colors from '../../utils/colors';

// const screenWidth = Dimensions.get(e'window').width;
export const styles = StyleSheet.create({
  errorContainer: {
    zIndex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.backDropColor,
    width: responsiveWidthWrtScreen(100),
    height: responsiveHeightWrtScreen(100),
  },
  errorText: {
    color: Colors.black,
    fontSize: responsiveFontSize(18),
    fontWeight: '400',
    padding: responsiveHeightWrtScreen(3),
  },
  modal: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
    width: responsiveWidthWrtScreen(80),
    height: responsiveHeightWrtScreen(25),
  },
});
