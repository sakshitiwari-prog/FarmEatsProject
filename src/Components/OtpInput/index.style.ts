import {StyleSheet} from 'react-native';
import Colors from '../../utils/colors';
import { responsiveFontSize, responsiveHeightWrtScreen, responsiveWidthWrtScreen } from '../../utils/responsiveHelper';

const styles = StyleSheet.create({
  textLabel: {
    fontSize: responsiveFontSize(14), // Set font size dynamically
    fontWeight: '600',
    color: Colors.backDropColor,
  },
  leftIconContainer:{
    marginBottom: -responsiveHeightWrtScreen(0.3),
    justifyContent: 'center',
  },
  customIconContainer: {
    flexDirection: 'row',
    width: responsiveWidthWrtScreen(20),
    marginBottom: -8,
    alignItems: 'center',
  },
  rightIconContainer: {
    width: responsiveWidthWrtScreen(20),
    justifyContent: 'center',
  },
  error: {
    width: responsiveWidthWrtScreen(84),
    color: Colors.black,
    fontSize: responsiveFontSize(11),
    marginVertical: responsiveHeightWrtScreen(1),
  },
  forgot: {
    color: Colors.primary,
    fontSize: responsiveFontSize(14),
  },
  inputField: {
    fontFamily: 'BeVietnamPro-Regular',
    fontSize: responsiveFontSize(22),
    backgroundColor: Colors.inputFieldBg,
    display:'flex',
   
    // justifyContent:'center',
    alignItems:'center',
    flexDirection:'row',
  },
  outlineStyle: {
    borderWidth: 1.53,
  },
  noteLimitContainer: {
    display: 'flex',
    flexDirection: 'row',

    alignItems: 'center',
  },
  noteLength: {fontWeight: '700'},
});

export default styles;
