import * as React from 'react';
import {List} from 'react-native-paper';
import {styles} from './index.style';
import {ScrollView, Text, View} from 'react-native';
import {
  numberOfLines,
  responsiveHeightWrtScreen,
  responsiveWidthWrtScreen,
} from '../../utils/responsiveHelper';

const QuoteItem = ({quote}: any) => {
  let quoteCategory = Object.keys(quote)[0];
  let quoteCategoryList = Object.values(quote)[0];
  const [expanded, setExpanded] = React.useState<{
    quoteCategory: string;
    isExpanded: boolean;
  }>({
    quoteCategory: '',
    isExpanded: false,
  });
 

  const handlePress = (quoteTitle: string) => {
    setExpanded(prevExpanded => ({
      quoteCategory:
        prevExpanded.quoteCategory === quoteTitle ? '' : quoteTitle,
      isExpanded: !prevExpanded.isExpanded,
    }));
  };

  return (
    <List.Accordion
      titleStyle={styles.quoteCategoryTitle}
      title={quoteCategory}
      expanded={expanded.quoteCategory === quoteCategory && expanded.isExpanded}
      onPress={() => handlePress(quoteCategory)}>
      {Array.isArray(quoteCategoryList) && quoteCategoryList.length > 0 ? (
        quoteCategoryList.map((quoteItem: any, index: number) => (
          <View style={styles.quoteCategoryItem} key={index}>
            <List.Item
              titleNumberOfLines={numberOfLines(quoteItem.quote.length)}
              titleStyle={styles.quoteCategoryItemTitle} // Adjust the styles as needed
              key={index}
              title={quoteItem.quote}
              description={quoteItem.date}
              descriptionStyle={styles.quoteCategoryItemDesc} // Adjust the styles for the description
            />
          </View>
        ))
      ) : (
        <View style={styles.quoteCategoryItem}>
          <List.Item
            titleStyle={styles.quoteCategoryItemTitle} // Adjust the styles as needed
            title="No quotes available"
          />
        </View>
      )}
    </List.Accordion>
  );
};

export default QuoteItem;
