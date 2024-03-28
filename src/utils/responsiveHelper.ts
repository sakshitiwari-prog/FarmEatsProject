import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
const baseWidth = 375; // Your base height
const responsiveWidthWrtScreen = (percentage: number) => {
  const newSize = (width * percentage) / 100;
  return newSize;
};
const responsiveHeightWrtScreen = (percentage: number) => {
  const newSize = (height * percentage) / 100;
  return newSize;
};
const numberOfLines = (length: number) => {
  const fontSize = responsiveFontSize(13); // Assuming 13% fontsize of title
  const averageCharWidth = fontSize * 0.6; // Assuming average character width as 60% of font size (adjust as needed)
  const containerWidth = width * 0.9; // Assuming your container takes 90% of the screen width
  const NOL = Math.ceil((length * averageCharWidth) / containerWidth);
  return NOL;
};
const responsiveFontSize = (fontSize: number) => {
  return Math.round((fontSize / baseWidth) * width);
};

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

export {
  responsiveWidthWrtScreen,
  responsiveHeightWrtScreen,
  responsiveFontSize,
  windowWidth,
  windowHeight,
  numberOfLines,
};
