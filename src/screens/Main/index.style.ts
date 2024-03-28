import {StyleSheet} from 'react-native';
import {
  responsiveWidthWrtScreen,
  responsiveHeightWrtScreen,
  responsiveFontSize,
} from '../../utils/responsiveHelper';
import Colors from '../../utils/colors';

const styles = StyleSheet.create({
  container: {
    height: responsiveHeightWrtScreen(100),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: Colors.background,
  },
  mainContainer: {
    width: responsiveWidthWrtScreen(80),
    height: responsiveHeightWrtScreen(32),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },

  upperPart: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  lowerPart: {},
  appName: {
    fontSize: responsiveFontSize(20),
    fontWeight: '500',
    color: Colors.white,
  },
  appImage: {
    width: responsiveWidthWrtScreen(20),
    height: responsiveHeightWrtScreen(5),
    objectFit: 'contain',
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
    borderRadius: 12,
    width: responsiveWidthWrtScreen(80), // Set width
    height: responsiveHeightWrtScreen(6), // Set height
    marginVertical: responsiveWidthWrtScreen(2), // Set vertical margin
    paddingHorizontal: responsiveWidthWrtScreen(2), // Set horizontal padding
  },
  outlined: {
    borderWidth: 1, // Border width
    borderColor: Colors.white,
  },
  label: {
    fontSize: responsiveFontSize(16), // Set font size dynamically
    fontWeight: '600', // Set font weight as a string
  },
});

export {styles, buttonStyle};
