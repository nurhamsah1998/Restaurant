import React from 'react';
import {View, StyleSheet, Image, BackHandler, Alert} from 'react-native';
import {Divider, Text} from 'react-native-paper';
import {useNavigation, useFocusEffect, use} from '@react-navigation/native';

import HeaderBack from '../../../Component/Element/HeaderBack';
import {theme} from '../../../App';
import MyButton from '../../../Component/Element/MyButton';
import BottomSheetScrollViewComponent from '../../../Component/Element/BottomSheetScrollViewComponent';
import {FormatCurrency} from '../../../Component/FormatCurrency';

function Orders(route) {
  const style = StyleSheet.create({
    container: {
      padding: 10,
      flex: 1,
    },
    button: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    list: {
      paddingBottom: 75,
    },
    displayTitle: {
      textAlign: 'center',
      fontFamily: 'Poppins-Bold',
      color: theme.colors.primary,
    },
    displayTitleTag: {
      textAlign: 'center',
    },
    qrContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 5,
    },
    qr: {
      backgroundColor: theme.colors.white,
      width: 250,
      height: 250,
      padding: 15,
      borderRadius: 20,
      shadowColor: '#000',
      elevation: 10,
    },
    images: {width: '100%', height: '100%'},
    qrCode: {
      marginTop: 10,
      textAlign: 'center',
      fontFamily: 'Poppins-Bold',
      fontSize: 19,
    },
    totalPaymentTitle: {
      marginTop: 20,
      textAlign: 'center',
      fontSize: 17,
    },
    totalPayment: {
      textAlign: 'center',
      fontSize: 19,
      color: theme.colors.primary,
      fontFamily: 'Poppins-Bold',
    },
    containerList: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    price: {
      color: theme.colors.primary,
      fontFamily: 'Poppins-Bold',
      fontSize: 17,
    },
    priceItem: {
      color: theme.colors.primary,
    },
    label: {
      fontSize: 17,
    },
    main: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
    },
    ItemSeparatorComponent: {
      height: 10,
    },
    seperatorButton: {marginHorizontal: 5},
    divider: {marginVertical: 5},
  });
  const listOrders = [route?.route?.params];

  const {
    body: {items, type},
    backPath: {parent, child},
  } = listOrders[0];
  const totalPayment =
    items?.length <= 0
      ? 0
      : items?.map(i => i?.price * i?.quantity)?.reduce((x, y) => x + y);
  const navigate = useNavigation();
  const sheetRef = React.useRef(null);

  /// Preventing going back
  React.useEffect(() => {
    const backAction = () => {
      navigate.navigate(parent, {screen: child});
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  const List = () => {
    return (
      <View style={style.list}>
        {items?.map((value, index) => (
          <View key={index}>
            <View style={style.containerList}>
              <View>
                <Text style={style.label}>{value?.label}</Text>
                <Text>
                  {value?.quantity} x
                  <Text style={style.priceItem}>
                    {' '}
                    {FormatCurrency(value?.price)}
                  </Text>
                </Text>
              </View>
              <Text style={style.price}>
                {FormatCurrency(value?.price * value?.quantity)}
              </Text>
            </View>
            <Divider style={style.divider} />
          </View>
        ))}
      </View>
    );
  };
  return (
    <BottomSheetScrollViewComponent
      title="All Your Menu List"
      sheetRef={sheetRef}
      cancelLabel="Cancel"
      content={<List />}>
      <View style={style.container}>
        <HeaderBack
          onPressBack={() => navigate.navigate(parent, {screen: child})}
          marginBottom={0}
          title="Orders"
        />
        <View style={style.main}>
          <View>
            <Text variant="displaySmall" style={style.displayTitle}>
              One More Step
            </Text>
            <Text style={style.displayTitleTag}>
              Come to the cashier then show the unique uni code for the payment
              process.
            </Text>

            <View style={style.qrContainer}>
              <Text style={style.qrCode}>INV-UI9909IKJU9989</Text>
              <View style={style.qr}>
                <Image
                  resizeMode="cover"
                  style={style.images}
                  source={require('../../../Component/Asset/qr.png')}
                />
              </View>
              <Text style={style.totalPaymentTitle}>Total Payment</Text>
              <Text style={style.totalPayment}>
                {FormatCurrency(totalPayment)}
              </Text>
            </View>
            <Text style={[style.displayTitleTag, {marginBottom: 20}]}>
              the cashier will scan the qr code for payment verification.
            </Text>
            <View style={style.button}>
              <MyButton
                color="error"
                sx={{flex: 1}}
                onPress={() =>
                  Alert.alert('Doesnt have function', 'put text here')
                }
                title="Cancel My Order"
              />
              <View style={style.seperatorButton} />
              <MyButton
                mode="contained"
                sx={{flex: 1}}
                onPress={() => sheetRef.current?.snapToIndex(1)}
                title="See My Order"
              />
            </View>
          </View>
        </View>
      </View>
    </BottomSheetScrollViewComponent>
  );
}

export default Orders;
