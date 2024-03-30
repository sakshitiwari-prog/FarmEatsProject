import {StyleSheet} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeightWrtScreen,
  responsiveWidthWrtScreen,
} from '../../../utils/responsiveHelper';
import Colors from '../../../utils/colors';

const styles = StyleSheet.create({
  proof: {
    fontFamily: 'BeVietnamPro-Regular',
  },
  check:{
    width:responsiveWidthWrtScreen(36),
    height:responsiveHeightWrtScreen(11),
    objectFit:'contain',
    marginBottom:responsiveHeightWrtScreen(1)
  },
  successfulPrimaryMsg:{
    fontFamily: 'BeVietnamPro-Bold',
    fontSize:responsiveFontSize(28),
    color:Colors.black
  },
  successfulContentContainer:{
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-between',
    alignItems:'center',
    height:responsiveHeightWrtScreen(30),
    width:responsiveWidthWrtScreen(84),
    marginTop:responsiveHeightWrtScreen(20)
  },
  verifyContent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: responsiveHeightWrtScreen(2),
  },
  camera: {
    width: responsiveWidthWrtScreen(12),
    height: responsiveHeightWrtScreen(8),
    objectFit: 'contain',
  },
  contentContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: 1,
    width: responsiveWidthWrtScreen(84),
  },
  locationContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    width: responsiveWidthWrtScreen(84),
    flexDirection: 'row',
  },
  Icons: {
    width: responsiveWidthWrtScreen(7),
    height: responsiveHeightWrtScreen(2.5),
  },
  selectedItem: {
    backgroundColor: Colors.accent,
  },
  item: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.black,
  },
  itemText: {
    color: Colors.black,
    fontSize: 16,
  },
  dropdown: {
    // marginTop: responsiveHeightWrtScreen(1),

    color: Colors.black,
    backgroundColor: Colors.white,
    borderColor: Colors.white,
    borderRadius: 8,
    borderBottomWidth: 0,
    borderBottomColor: Colors.white,
    fontSize: responsiveFontSize(14),
    // height: responsiveHeightWrtScreen(6),
    fontWeight: '600',
  },
  signUpPageCount: {
    textAlign:'center',
    marginTop: responsiveHeightWrtScreen(1),
  },
  actionContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  loginOption: {
    marginTop: responsiveHeightWrtScreen(4),
    width: responsiveWidthWrtScreen(84),
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  resend: {color: Colors.black, textDecorationLine: 'underline'},

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
    alignItems: 'center',
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
    marginBottom: responsiveHeightWrtScreen(4),
  },
  mainContainer: {
    // width: responsiveWidthWrtScreen(94),
    // height: responsiveHeightWrtScreen(60),
    display: 'flex',
    height: responsiveHeightWrtScreen(92),
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  middlePart: {
    // marginTop: responsiveHeightWrtScreen(2),
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
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: Colors.accent,
    // flex: 1,
    height: responsiveHeightWrtScreen(92),
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
  noAccountQuesn: {
    // te
    // display: 'flex',
    // justifyContent: 'center',
    fontFamily: 'BeVietnamPro-Regular',
    // alignItems: 'center',
    color: Colors.backDropColor,

    marginBottom: responsiveHeightWrtScreen(3.5),
    fontSize: responsiveFontSize(12), // Set font size dynamically
    lineHeight:18
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
