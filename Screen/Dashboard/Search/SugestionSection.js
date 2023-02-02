import React from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';

import {SingleProductCard} from '../../../Component/Element/ProductCard';
import {FormatCurrency} from '../../../Component/FormatCurrency';
import {sectionData} from '../../../mockup';

function SugestionSection({
  onPressItem,
  disabledMArginBottom = false,
  data = false,
}) {
  const isData = data || sectionData;
  const style = StyleSheet.create({
    title: {fontSize: 19, fontFamily: 'Poppins-Bold'},
  });
  return (
    <View style={{marginTop: 20, marginBottom: disabledMArginBottom ? 0 : 60}}>
      {isData.map((item, index) => {
        return (
          <View key={index}>
            <Text style={style.title}>{item.title}</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {item.data.map((content, contentIndex) => (
                <SingleProductCard
                  margin={5}
                  onPress={() => onPressItem(content)}
                  key={contentIndex}
                  data={content}
                />
              ))}
            </ScrollView>
          </View>
        );
      })}
    </View>
  );
}

export default SugestionSection;
