import React from 'react';
import {View, FlatList, Image, StyleSheet, ImageBackground} from 'react-native';
import {Button, IconButton, Text} from 'react-native-paper';

import {FormatCurrency} from '../FormatCurrency';
import {theme} from '../../App';
import IconContained from './IconContained';
import MyButton from './MyButton';
import Seperator from './Seperator';

function ListProduct({
  data,
  isFavorite,
  cancelButtonLabel,
  submitButtonLabel,
  bottom = 80,
}) {
  const [quantity, setQuantity] = React.useState(1);
  const style = StyleSheet.create({
    itemSeparatorComponent: {height: 20},
    listFooterComponent: {height: bottom, width: '100%'},
    renderItemContainer: {
      flexDirection: 'row',
      borderRadius: 10,
    },
    imageContainer: {
      backgroundColor: theme.colors.divider,
      borderRadius: 10,
    },
    image: {height: 100, width: 100, borderRadius: 10},
    renderItemBody: {
      flex: 1,
      marginLeft: 10,
    },
    titlePriceXquantity: {fontSize: 14, color: theme.colors.backdrop},
    titlePriceTotal: {color: theme.colors.primary},
    btnCounter: {flexDirection: 'row', alignItems: 'center'},
    iconButton: {borderRadius: 5, height: 30, width: 30},
    valueCounter: {
      borderColor: theme.colors.primary,
      borderWidth: 1,
      borderRadius: 5,
      width: 30,
      height: 30,
      justifyContent: 'center',
      alignItems: 'center',
    },
    deleteIcon: {
      justifyContent: 'flex-end',
      flexDirection: 'row',
      backgroundColor: 'blue',
    },
    titleLabel: {flex: 1},
    quantity: {
      flexDirection: 'row',
    },
    quantityContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    main: {
      marginHorizontal: 10,
    },
    btnIsFavorite: {
      flexDirection: 'row',
    },
  });
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      ItemSeparatorComponent={<View style={style.itemSeparatorComponent} />}
      ListFooterComponent={<View style={style.listFooterComponent} />}
      renderItem={({item, index}) => {
        return (
          <View style={style.main} key={index}>
            <View
              style={[
                style.renderItemContainer,
                // eslint-disable-next-line react-native/no-inline-styles
                {marginTop: index === 0 ? 10 : 5},
              ]}>
              <ImageBackground
                style={style.imageContainer}
                source={require('../../Component/Asset/RG.png')}
                resizeMode="center">
                <Image
                  source={{uri: item.imgLink}}
                  resizeMode="cover"
                  style={style.image}
                />
              </ImageBackground>
              <View style={style.renderItemBody}>
                <View style={style.quantityContainer}>
                  <Text variant="titleMedium" style={style.titleLabel}>
                    {item.label}
                  </Text>
                </View>
                <View style={style.quantityContainer}>
                  <View>
                    <Text style={style.titlePriceXquantity}>
                      {FormatCurrency(item.price)} x {item.quantity}
                    </Text>
                    <Text variant="titleMedium" style={style.titlePriceTotal}>
                      {FormatCurrency(item.price * item.quantity)}
                    </Text>
                  </View>
                  <View style={style.btnCounter}>
                    <IconButton
                      icon="minus"
                      disabled={quantity <= 1}
                      mode="contained"
                      containerColor={theme.colors.error}
                      iconColor={theme.colors.white}
                      style={style.iconButton}
                      onPress={() => setQuantity(prev => prev - 1)}
                    />
                    <View style={style.valueCounter}>
                      <Text style={style.quantity}>{quantity}</Text>
                    </View>
                    <IconButton
                      icon="plus"
                      mode="contained"
                      containerColor={theme.colors.primary}
                      iconColor={theme.colors.white}
                      style={style.iconButton}
                      onPress={() => setQuantity(prev => prev + 1)}
                    />
                  </View>
                </View>
              </View>
            </View>
            <View style={style.btnIsFavorite}>
              <MyButton
                sx={{marginTop: 10, flex: 1}}
                small
                color="error"
                title={cancelButtonLabel}
              />
              {isFavorite ? <Seperator /> : null}
              {isFavorite ? (
                <MyButton
                  sx={{marginTop: 10, flex: 1}}
                  small
                  mode="contained"
                  color="primary"
                  title={submitButtonLabel}
                />
              ) : null}
            </View>
          </View>
        );
      }}
      data={data}
    />
  );
}

export default ListProduct;
