import * as React from 'react';
// import {Image} from 'react-native';
import {FAB} from 'react-native-paper';
import {Constants} from '../../utils/constants';
import {ImagesAssets} from '../../utils/imageAssets';
import {styles} from './index.style';
// import Icon from 'react-native-vector-icons/FontAwesome'; // Import the desired icon from react-native-vector-icons
import {Image, View} from 'react-native';
import Colors from '../../utils/colors';
import {removeDataFromStorage} from '../../utils/storage';

const FabGroup = (props: any) => {
  const [state, setState] = React.useState({open: false});

  const onStateChange = ({open}: any) => setState({open});
  async function logout() {
    await removeDataFromStorage('user')
      .then(data => {
        if (data) {
          props.navigation.navigate(Constants.navigationScreens.Login);
        }
      })
      .catch((err: any) => {
        props.errorOccured();
      });
  }
  const {open} = state;
  return (
    <FAB.Group
      backdropColor={Colors.backDropColor}
      style={styles.fabgroup}
      open={open}
      visible
      icon={() => (
        <View style={styles.menuContainer}>
          <Image style={styles.navMenu} source={ImagesAssets.navMenu} />
        </View>
      )} // Custom icon
      actions={[
        {
          icon: () => (
            <View style={styles.menuContainer}>
              <Image
                style={[styles.navMenu, styles.listImg]}
                source={ImagesAssets.profileImg}
              />
            </View>
          ),
          label: Constants.ProfileScreen.profile,
          onPress: () => {
            props.navigation.navigate(Constants.navigationScreens.Profile);
          },
        },
        {
          icon: () => (
            <View style={styles.menuContainer}>
              <Image
                style={[styles.navMenu, styles.listImg]}
                source={ImagesAssets.quoteHistory}
              />
            </View>
          ),
          label: Constants.quoteHistoryScreen.quoteHistory,
          // label: Constants.quoteHistoryScreen.quoteHistory,
          onPress: () =>
            props.navigation.navigate(Constants.navigationScreens.QuoteHistory),
        },
        {
          icon: () => (
            <View style={styles.menuContainer}>
              <Image
                style={[styles.navMenu, styles.listImg]}
                source={ImagesAssets.logout}
              />
            </View>
          ),
          label: Constants.others.logout,
          // label: Constants.quoteHistoryScreen.quoteHistory,
          onPress: () => logout(),
        },
      ]}
      onStateChange={onStateChange}
      onPress={() => {
        if (open) {
          // do something if the speed dial is open
        }
      }}
    />
  );
};

export default FabGroup;
