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
  container:{
    position:'relative'
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
 
});
