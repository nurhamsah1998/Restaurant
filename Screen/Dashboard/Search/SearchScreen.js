import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Text} from 'react-native-paper';
import {useSelector, useDispatch} from 'react-redux';

import {close} from '../../../Store/BottomSheetReducer';
import {theme} from '../../../App';
import ProductCard from '../../../Component/Element/ProductCard';
import Chip from '../../../Component/Element/Chip';
import {product, category} from '../../../mockup';
import BottomSheetScrollViewComponent from '../../../Component/Element/BottomSheetScrollViewComponent';
import Filter from './Filter';

function SearchScreen({navigation}) {
  const [selectedCategory, setSelectedIdCategory] = React.useState(null);
  const navigate = useNavigation();
  const bottomSheet = useSelector(props => props.bottomSheet);
  const dispatch = useDispatch();

  const onPressItem = i => {
    navigate.navigate('RootDashboard', {screen: 'ProductDetail', params: {i}});
  };
  const style = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.white,
    },
    chipContainer: {
      paddingBottom: 10,
      paddingHorizontal: 10,
      paddingTop: 10,
    },
    productCardContainer: {
      paddingHorizontal: 10,
      flex: 1,
    },
  });
  const sheetRef = React.useRef(null);
  React.useEffect(() => {
    if (bottomSheet?.sheetRef) {
      sheetRef.current?.snapToIndex(1);
    }
  }, [bottomSheet?.sheetRef]);
  return (
    <BottomSheetScrollViewComponent
      onClose={() => dispatch(close())}
      title="Filter"
      sheetRef={sheetRef}
      submitLabel="Apply"
      cancelLabel="Close"
      content={<Filter />}>
      <View style={style.container}>
        <View style={style.chipContainer}>
          <View>
            <Chip
              data={category}
              selectedCategory={selectedCategory}
              setSelectedIdCategory={setSelectedIdCategory}
              keyExtractor={item => item.value}
            />
          </View>
        </View>
        <View style={style.productCardContainer}>
          <ProductCard onPressItem={onPressItem} data={product} />
        </View>
      </View>
    </BottomSheetScrollViewComponent>
  );
}

export default SearchScreen;
