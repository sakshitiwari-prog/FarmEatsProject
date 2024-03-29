import {StyleSheet} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeightWrtScreen,
  responsiveWidthWrtScreen,
} from '../../../utils/responsiveHelper';
import Colors from '../../../utils/colors';
const styles = StyleSheet.create({
  textLabel: {
    fontSize: responsiveFontSize(12), // Set font size dynamically
    fontWeight: '600',
    color: Colors.backDropColor,
  },
  Icons:{
    width:20,height:20
  },
  customIconContainer: {
    flexDirection: 'row',
    width: responsiveWidthWrtScreen(20),
    marginBottom: -8,
    alignItems: 'center',
  },
  leftIconContainer:{
    marginBottom: -responsiveHeightWrtScreen(0.3),
    justifyContent: 'center',
  },
  
  rightIconContainer: {
    width: responsiveWidthWrtScreen(20),
    justifyContent: 'center',
  },
  error: {
    width: responsiveWidthWrtScreen(84),
    color: Colors.accent,
    fontSize: responsiveFontSize(11),
    marginTop: responsiveHeightWrtScreen(0.05),
  },
  forgot: {
    color: Colors.primary,
    marginTop:8
  },
  inputField: {
    fontFamily: 'BeVietnamPro-Regular',
    fontSize: responsiveFontSize(14),
    backgroundColor: Colors.inputFieldBg,
  },
  outlineStyle: {
    borderWidth: 1,
    borderColor: Colors.white,
  },
  noteLimitContainer: {
    display: 'flex',
    flexDirection: 'row',

    alignItems: 'center',
  },
  noteLength: {fontWeight: '700'},
});

export default styles;
