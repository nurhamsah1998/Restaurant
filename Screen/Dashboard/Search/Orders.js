import React from 'react';
import {View, StyleSheet, Image, FlatList} from 'react-native';
import {Text} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

import HeaderBack from '../../../Component/Element/HeaderBack';
import {theme} from '../../../App';
import MyButton from '../../../Component/Element/MyButton';
import BottomSheetComponent from '../../../Component/Element/BottomSheetComponent';
import {FormatCurrency} from '../../../Component/FormatCurrency';

function Orders(route) {
  const style = StyleSheet.create({
    container: {
      padding: 10,
      flex: 1,
    },
    displayTitle: {
      textAlign: 'center',
      fontFamily: 'Poppins-Bold',
      color: theme.colors.primary,
    },
    displayTitleTag: {
      textAlign: 'center',
      marginTop: 5,
    },
    qrContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 20,
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
  });
  const [visible, setVisible] = React.useState(false);
  const listOrders = [route?.route?.params];
  const {items, type} = listOrders[0];
  console.log(type);
  const totalPayment =
    items?.length <= 0
      ? 0
      : items?.map(i => i?.price * i?.quantity)?.reduce((x, y) => x + y);
  const navigate = useNavigation();
  return (
    <View style={style.container}>
      <HeaderBack
        onPressBack={() => navigate.navigate('Dashboard', {screen: 'Search'})}
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
          <Text style={style.displayTitleTag}>
            the cashier will scan the qr code for payment verification.
          </Text>
          <MyButton
            mode="contained"
            onPress={() => setVisible(true)}
            sx={{marginTop: 10}}
            title="See My Order"
          />
        </View>
      </View>
      <BottomSheetComponent
        readOnly
        content={
          <FlatList
            ItemSeparatorComponent={
              <View style={style.ItemSeparatorComponent} />
            }
            data={items}
            renderItem={({item, index}) => {
              return (
                <View key={index} style={style.containerList}>
                  <View>
                    <Text style={style.label}>{item?.label}</Text>
                    <Text>
                      {item?.quantity} x
                      <Text style={style.priceItem}>
                        {' '}
                        {FormatCurrency(item?.price)}
                      </Text>
                    </Text>
                  </View>
                  <Text style={style.price}>
                    {FormatCurrency(item?.price * item?.quantity)}
                  </Text>
                </View>
              );
            }}
          />
        }
        title="Order List"
        isVisible={visible}
        submitTitle="Checkout"
        onDismiss={() => {
          setVisible(false);
        }}
      />
    </View>
  );
}

export default Orders;
