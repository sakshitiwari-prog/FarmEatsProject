import React, {useState, useRef, useEffect} from 'react';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {View, Text, Dimensions, Image} from 'react-native';
import Colors from '../../utils/colors';
import {
  responsiveFontSize,
  responsiveHeightWrtScreen,
  responsiveWidthWrtScreen,
} from '../../utils/responsiveHelper';
import {ImagesAssets} from '../../utils/imageAssets';
import {styles} from './index.style';
import {Constants} from '../../utils/constants';
import {Button} from 'react-native-paper';
import {TouchableOpacity} from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

const Slider = ({navigation}) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const carouselRef = useRef(null); // Ref for the carousel component
  const [currentSlide, setCurrentSlide] = useState({
    title: 'Quality',
    bgColor: Colors.firstSlideBgColor,
    BgImg: ImagesAssets.firstSlid,
    description:
      'Sell your farm fresh products directly to consumers, cutting out the middleman and reducing emissions of the global supply chain.',
  });

  const RenderItem = ({item, index}) => {
    return (
      <View
        style={{
          backgroundColor: item.bgColor,
          paddingBottom: responsiveHeightWrtScreen(1),
          height: responsiveHeightWrtScreen(54),
        }}>
        <Image
          style={{
            width: responsiveWidthWrtScreen(100),
            // marginLeft: -responsiveWidthWrtScreen(5),
            height: responsiveHeightWrtScreen(57.5),
            objectFit: 'contain',
          }}
          source={item.BgImg}></Image>
      </View>
    );
  };
  const currentSlideData = Constants.slides[activeSlide];
  const pagination = () => {
    return (
      <Pagination
        dotsLength={Constants.slides.length}
        activeDotIndex={activeSlide}
        containerStyle={{
          backgroundColor: Colors.white,
          width: responsiveWidthWrtScreen(100),
          height: responsiveHeightWrtScreen(10),
          borderTopRightRadius: 49,
          borderTopLeftRadius: 49,
        }}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: -5,
          backgroundColor: Colors.black,
        }}
        inactiveDotOpacity={1}
        inactiveDotScale={0.7}
      />
    );
  };

  return (
    <SafeAreaView>
    <View
      style={[styles.container, {backgroundColor: currentSlideData?.bgColor}]}>
      <Carousel
        ref={carouselRef}
        data={Constants.slides}
        renderItem={RenderItem}
        sliderWidth={Dimensions.get('window').width}
        itemWidth={Dimensions.get('window').width}
        onSnapToItem={index => setActiveSlide(index)}
        loop={true} // Enable looping
        loopClonesPerSide={Constants.slides.length} // Number of clones on each side for smooth looping
        autoplay={true} // Enable autoplay
        autoplayInterval={5000} // Autoplay interval in milliseconds (3 seconds)
      />
      <View
        style={{
          backgroundColor: Colors.white,
          width: responsiveWidthWrtScreen(100),
          height: responsiveHeightWrtScreen(46), // Adjust height as needed
          borderTopRightRadius: 49,
          borderTopLeftRadius: 49,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            paddingHorizontal: 20,
            width: responsiveWidthWrtScreen(83),
            // marginTop: -responsiveHeightWrtScreen(4),
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontWeight: 'bold',
              marginBottom: responsiveHeightWrtScreen(3.5),
              fontFamily: 'BeVietnamPro-Bold',
              color: Colors.black,
              fontSize: responsiveFontSize(18),
            }}>
            {currentSlideData.title}
          </Text>
          <Text style={{textAlign: 'center', color: Colors.black}}>
            {currentSlideData.description}
          </Text>
          <View style={{display: 'flex', alignItems: 'center'}}>
            {pagination()}
          </View>
          <View style={{display: 'flex', alignItems: 'center'}}>
            <Button
              labelStyle={styles.label}
              mode={'contained'}
              textColor={Colors.white}
              buttonColor={currentSlideData.bgColor}
              style={[styles.button]}>
              {Constants.others.actionSplashBtnText}
            </Button>
            <Button
              textColor={Colors.black}
              onPress={() => {
                navigation.navigate(Constants.navigationScreens.Login);
              }}
              style={styles.login}>
              <Text style={{textDecorationLine: 'underline'}}>
                {Constants.LoginSingUpScreen.login}
              </Text>
            </Button>
            {/* <TouchableOpacity onPress={() => {}}>
          
            </TouchableOpacity> */}
          </View>
        </View>
      </View>
    </View>
    </SafeAreaView>
  );
};

export default Slider;
