import React, {useEffect, useState} from 'react';
import {
  Image,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {Constants} from '../../utils/constants';
import {Button, TextInput} from 'react-native-paper';
import Colors from '../../utils/colors';
import {styles} from './index.style';
import FabGroup from '../../Components/FabGroup';
import {getDataFromStorage} from '../../utils/storage';
import ErrorModal from '../../Components/errorModal';
import {urls} from '../../utils/Helpers/urlHelper';
import {postRequest, quoteSearchRequest} from '../../utils/axios';
import {useFocusEffect} from '@react-navigation/native';
import {ImagesAssets} from '../../utils/imageAssets';
// import AuthProvider from '../../AuthProvider';
// import styles from './index.style';
const HomeScreen = ({navigation}: any) => {
  const [error, setError] = useState({isError: false, msg: ''});
  const [userData, setUserData] = useState<any>({name: 'User'});
  const [token, setToken] = useState<any>('');
  const [quoteInfo, setQuoteInfo] = useState({
    searchQuote: '',
    generatedQuote: '',
  });
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  useEffect(() => {
    getData();
  }, []);
  useFocusEffect(
    React.useCallback(() => {
      getData();
      setQuoteInfo({
        searchQuote: '',
        generatedQuote: '',
      });
    }, []),
  );
  async function getData() {
    await getDataFromStorage('user')
      .then(data => {
        let parseData;
        if (data) {
          parseData = JSON.parse(data);
          setUserData(parseData);
        }
      })
      .catch((err: any) => {
        setError({isError: true, msg: Constants.others.wentWrong});
      });
    await getDataFromStorage('token')
      .then(data => {
        let parseData;
        if (data) {
          parseData = JSON.parse(data);
          setToken(parseData);
        }
      })
      .catch((err: any) => {
        setError({isError: true, msg: Constants.others.wentWrong});
      });
  }

  const handleOutsideMenuPress = () => {
    if (isMenuVisible) {
      setIsMenuVisible(false);
    }
  };
  const quoteSearch = async () => {
    const sendQuoteGeneratorData = {
      quote: quoteInfo.searchQuote,
    };
    quoteSearchRequest(urls.quoteGenerator, sendQuoteGeneratorData)
      .then(async (res: any) => {
        setQuoteInfo(prevInfo => ({...prevInfo, generatedQuote: res[0].quote}));
        if (res[0].quote) {
          try {
            const sendData = {
              userId: userData.userId,
              quote: res[0].quote,
              quoteCategory: quoteInfo.searchQuote,
            };

            postRequest(urls.quoteCreation, sendData)
              .then(async (res: any) => {
                if (res.success) {
                  try {
                  } catch (error) {
                    setError({isError: true, msg: Constants.others.wentWrong});
                  }
                } else {
                  throw new Error(res.msg);
                }
              })
              .catch(err => {
                setError({isError: true, msg: Constants.others.wentWrong});
              });
          } catch (error) {
            setError({isError: true, msg: Constants.others.wentWrong});
          }
        } else {
          throw new Error(res.msg);
        }
      })
      .catch(err => {
        setError({isError: true, msg: Constants.others.wentWrong});
      });
  };
  return (
    <TouchableWithoutFeedback onPress={() => handleOutsideMenuPress}>
      <SafeAreaView>
        <StatusBar backgroundColor={Colors.white} barStyle="light-content" />
        <View style={styles.mainContainer}>
          <View style={styles.upperPart}>
            <View style={styles.contentView}>
              {
                <Text style={styles.title}>
                  {Constants.HomeScreen.greetings}

                  <Text style={styles.title}> {userData?.name}</Text>

                  {Constants.HomeScreen.exclamationMark}
                </Text>
              }
            </View>
            <View>
              <TextInput
                outlineColor={Colors.white}
                theme={{
                  colors: {
                    primary: Colors.white,
                  },
                  roundness: 12,
                }}
                label={
                  <Text style={styles.textLabel}>
                    {Constants.HomeScreen.searchQuote}
                  </Text>
                }
                value={quoteInfo.searchQuote}
                mode="outlined"
                right={
                  <TextInput.Icon
                    icon="magnify"
                    onPress={() => {
                      if (quoteInfo.searchQuote.length > 0) quoteSearch();
                    }}
                  />
                }
                outlineStyle={styles.outlineStyle}
                onChangeText={val => {
                  setQuoteInfo(prevInfo => ({...prevInfo, searchQuote: val}));
                }}
                style={[styles.inputField]}
              />
              <TextInput
                disabled
                outlineColor={Colors.white}
                theme={{
                  colors: {
                    primary: Colors.white,
                  },
                  roundness: 12,
                }}
                mode="outlined"
                value={quoteInfo.generatedQuote}
                outlineStyle={styles.outlineStyle}
                multiline={true} // Enable multiline input
                numberOfLines={10}
                style={[styles.inputField, styles.searchQuote]}
              />
            </View>
          </View>
          <FabGroup
            navigation={navigation}
            errorOccured={() =>
              setError({isError: true, msg: Constants.others.wentWrong})
            }
          />
        </View>
        {error.isError && (
          <ErrorModal
            error={error.isError}
            msg={error.msg}
            onCloseModel={() => setError({isError: false, msg: ''})}
          />
        )}
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default HomeScreen;
