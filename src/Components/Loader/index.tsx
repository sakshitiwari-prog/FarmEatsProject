import * as React from 'react';
import {ActivityIndicator} from 'react-native-paper';
import Colors from '../../utils/colors';
import {View} from 'react-native';
import {styles} from './index.style';

const Loader = ({isLoad}: any) => {
  return (
    <>
      {isLoad && (
        <View style={styles.loaderContainer}>
          <ActivityIndicator animating={true} color={Colors.white} />
        </View>
      )}
    </>
  );
};

export default Loader;
