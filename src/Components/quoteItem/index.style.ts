import {StyleSheet} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeightWrtScreen,
} from '../../utils/responsiveHelper';
import Colors from '../../utils/colors';

export const styles = StyleSheet.create({
  scrollContainer: {
    height: responsiveHeightWrtScreen(30),
    // backgroundColor: 'red',
  },
  quoteCategoryItemContainer: {
    height: responsiveHeightWrtScreen(30),
    overflow: 'scroll',
  },
  quoteCategoryTitle: {
    color: Colors.background,
    fontSize: responsiveFontSize(15),
    fontWeight: '700',
  },
  quoteCategoryItem: {
    overflow: 'scroll',
    backgroundColor: Colors.white,
    borderColor: Colors.errorModalBackgroundColor,
    borderTopWidth: 1,
  },
  quoteCategoryItemTitle: {
    lineHeight: 20,
    color: Colors.black,
    fontSize: responsiveFontSize(13),
    fontWeight: '500',
    marginBottom: responsiveHeightWrtScreen(0.5),
  },
  quoteCategoryItemDesc: {
    fontSize: 10,
    fontWeight: '500',
    color: 'gray',
  },
});
