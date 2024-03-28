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
  login: {marginTop:responsiveHeightWrtScreen(2),
    textAlign: 'center',
     fontSize:responsiveFontSize(12),
    fontFamily: 'BeVietnamPro-Medium',
    color: Colors.dotColor,
    borderBottomColor:Colors.dotColor,
  },
  label: {
    color: Colors.white,
    fontSize: responsiveFontSize(15),
    fontFamily: 'BeVietnamPro-Medium',
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 117,
    // marginBottom: responsiveWidthWrtScreen(8),
    width: responsiveWidthWrtScreen(60), // Set width
    // height: responsiveHeightWrtScreen(6), // Set height
    marginTop: responsiveWidthWrtScreen(1), // Set vertical margin
    paddingVertical: responsiveWidthWrtScreen(1.8), // Set horizontal padding
  },
  container: {
    position: 'relative',
  },
  Icons: {
    width: 20,
    height: 20,
  },
  customIconContainer: {
    flexDirection: 'row',
    width: responsiveWidthWrtScreen(20),
    marginBottom: -8,
    alignItems: 'center',
  },
});
