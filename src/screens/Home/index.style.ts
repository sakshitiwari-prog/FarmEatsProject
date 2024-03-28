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
  searchQuote: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: responsiveHeightWrtScreen(20),
    marginVertical: responsiveWidthWrtScreen(1),
  },
  upperPart: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  mainContainer: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.background,
    width: responsiveWidthWrtScreen(100),
    height: responsiveHeightWrtScreen(100),
  },
  textLabel: {
    fontSize: responsiveFontSize(14), // Set font size dynamically
    fontWeight: '600',
    color: Colors.white,
  },
  container: {
    flexGrow: 1,
  },
  fabStyle: {
    bottom: 16,
    right: 16,
    position: 'absolute',
  },
  contentView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // position: 'absolute',
    height: responsiveHeightWrtScreen(10),
    width: responsiveWidthWrtScreen(100),
    // top: 0,
    paddingVertical: responsiveHeightWrtScreen(1),
    backgroundColor: Colors.white,
    marginBottom: responsiveWidthWrtScreen(3),
  },
  title: {
    fontSize: responsiveFontSize(23),
    color: Colors.background,
    fontWeight: '600',
    // textAlign: 'center',
  },
  inputField: {
    marginVertical: responsiveWidthWrtScreen(5),
    fontWeight: '600',
    width: responsiveWidthWrtScreen(90),
    fontSize: responsiveFontSize(14),

    backgroundColor: Colors.formFieldBgColor,
  },
  outlineStyle: {
    borderWidth: 1,
    borderColor: Colors.white,
  },
  scroll: {flex: 1},
});
