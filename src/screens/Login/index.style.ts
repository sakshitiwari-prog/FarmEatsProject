import {StyleSheet} from 'react-native';
import {
  responsiveWidthWrtScreen,
  responsiveHeightWrtScreen,
  responsiveFontSize,
} from '../../utils/responsiveHelper';
import Colors from '../../utils/colors';

const styles = StyleSheet.create({
  loginOption: {
    width: responsiveWidthWrtScreen(84),
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  iconContainer: {
    paddingHorizontal: responsiveWidthWrtScreen(8),
    paddingVertical: 0,
    borderColor: Colors.socialIconBorder,
    borderWidth: 1,
    borderRadius: 30,
  },
  quesn: {
    display: 'flex',
    justifyContent: 'center',
   flexDirection:'row'
  },
  socialIcons: {
    width: responsiveWidthWrtScreen(8),
    height: responsiveHeightWrtScreen(6),
    objectFit: 'contain',
  },
  lowerContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: responsiveWidthWrtScreen(84),
  },

  container: {
    position: 'relative',
    zIndex: 0,
    height: responsiveHeightWrtScreen(100),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    // justifyContent: 'center',
    // alignItems: 'center',
    paddingVertical: responsiveHeightWrtScreen(4),
    paddingHorizontal: responsiveWidthWrtScreen(8),
    backgroundColor: Colors.white,
  },
  header: {
    fontSize: responsiveFontSize(16),
    // fontWeight: '600',
    color: Colors.black,
    fontFamily: 'BeVietnamPro-Regular',
    marginBottom: responsiveHeightWrtScreen(10),
  },
  mainContainer: {
    // width: responsiveWidthWrtScreen(94),
    height: responsiveHeightWrtScreen(60),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  middlePart: {
    marginTop: responsiveHeightWrtScreen(3),
  },
  upperPart: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  signUpNow: {
    fontSize: responsiveFontSize(14),
    // textDecorationLine: 'underline',
    color: Colors.primary, // Set font size dynamically
    // fontWeight: '600',
  },
  lowerPart: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: responsiveWidthWrtScreen(84),
    // fontWeight:'500',
  },
  greetingsMsg: {
    fontSize: responsiveFontSize(32),
    // fontWeight: '400',
    fontFamily: 'BeVietnamPro-Bold',
    color: Colors.black,
    textAlign: 'center',
    marginBottom: responsiveHeightWrtScreen(3),
  },

  appImage: {
    width: responsiveWidthWrtScreen(25),
    height: responsiveHeightWrtScreen(7),
    objectFit: 'contain',
  },
  signUpPageCount: {
    fontSize: responsiveFontSize(14),
  },
  noAccountQuesn: {
    // te
    // display: 'flex',
    // justifyContent: 'center',
    fontFamily: 'BeVietnamPro-Medium',
    // alignItems: 'center',
    color: Colors.backDropColor,

    marginBottom: responsiveHeightWrtScreen(4),
    fontSize: responsiveFontSize(10), // Set font size dynamically
    // fontWeight: '500',
  },
  card: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: responsiveWidthWrtScreen(70),
    marginHorizontal: responsiveWidthWrtScreen(5),
    marginVertical: responsiveHeightWrtScreen(3),
    padding: responsiveWidthWrtScreen(2),
  },
});
const buttonStyle = StyleSheet.create({
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 117,
    marginBottom: responsiveWidthWrtScreen(8),
    width: responsiveWidthWrtScreen(84), // Set width
    height: responsiveHeightWrtScreen(6), // Set height
    marginTop: responsiveWidthWrtScreen(5), // Set vertical margin
    paddingHorizontal: responsiveWidthWrtScreen(2), // Set horizontal padding
  },
  outlined: {
    borderWidth: 1, // Border width
    borderColor: Colors.white,
  },
  label: {
    color: Colors.white,
    fontSize: responsiveFontSize(18),
    fontFamily: 'BeVietnamPro-Medium',
  },
});
export {buttonStyle, styles};
