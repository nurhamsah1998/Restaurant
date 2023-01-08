import React from 'react';
import {View, StyleSheet, Image, FlatList} from 'react-native';
import {Text} from 'react-native-paper';

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
    containerList: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    price: {
      color: theme.colors.primary,
      fontFamily: 'Poppins-Bold',
    },
    main: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
    },
  });
  const [visible, setVisible] = React.useState(false);
  const listOrders = [route?.route?.params];
  return (
    <View style={style.container}>
      <HeaderBack marginBottom={0} title="Orders" />
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
            <View style={style.qr}>
              <Image
                resizeMode="cover"
                style={style.images}
                source={require('../../../Component/Asset/qr.png')}
              />
            </View>
            <Text style={style.qrCode}>INV-UI9909IKJU9989</Text>
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
            data={listOrders}
            renderItem={({item, index}) => {
              return (
                <View key={index} style={style.containerList}>
                  <View>
                    <Text variant="titleLarge">{item?.label}</Text>
                    <Text variant="titleSmall">
                      {item?.quantity} x {FormatCurrency(item?.price)}
                    </Text>
                  </View>
                  <Text style={style.price} variant="titleLarge">
                    {FormatCurrency(item?.price)}
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
