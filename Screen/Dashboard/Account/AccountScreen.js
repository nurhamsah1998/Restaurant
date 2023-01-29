import * as React from 'react';
import {View, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {theme} from '../../../App';
import {AuthToken} from '../../Routing/contextHelper';

function AccountScreen() {
  const {signOut} = React.useContext(AuthToken);
  const buttonList = [
    {
      label: 'Account Setting',
      tagLabel: 'change your profile information',
      leftIcon: 'setting',
      rightIcon: 'right',
    },
    {
      label: 'History',
      tagLabel: 'view your order history',
      leftIcon: 'flag',
      rightIcon: 'right',
    },
    {
      label: 'Call Center',
      tagLabel: 'contact us for more information',
      leftIcon: 'customerservice',
      rightIcon: 'right',
    },
    {
      label: 'Log Out',
      tagLabel: 'log out and delete all saved cart',
      leftIcon: 'logout',
      rightIcon: 'right',
      action: async () => {
        await AsyncStorage.clear();
        signOut();
      },
    },
  ];

  const style = StyleSheet.create({
    container: {flex: 1, backgroundColor: theme.colors.white},
    qrContainer: {
      backgroundColor: theme.colors.primary,
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 20,
      borderBottomEndRadius: 20,
      borderBottomStartRadius: 20,
      shadowColor: '#000',
      elevation: 5,
    },
    imageContainer: {
      backgroundColor: theme.colors.white,
      width: 200,
      height: 200,
      padding: 15,
      borderRadius: 10,
    },
    image: {width: '100%', height: '100%'},
    codeTitleQr: {
      fontFamily: 'Poppins-Bold',
      fontSize: 21,
      color: theme.colors.white,
      marginTop: 10,
    },
    accountName: {
      fontSize: 21,
      color: theme.colors.white,
      marginTop: -5,
    },
    accountProgress: {
      width: '100%',
      borderRadius: 10,
      shadowColor: '#000',
      elevation: 5,
      backgroundColor: theme.colors.primary,
      paddingVertical: 20,
      flexDirection: 'row',
      alignItems: 'flex-end',
    },
    accountProgressTitle: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    valueProgress: {
      textAlign: 'center',
      color: theme.colors.white,
      fontFamily: 'Poppins-Bold',
    },
    valueProgressTitle: {
      color: theme.colors.white,
      fontSize: 16,
    },
    bottomMenuContainer: {
      marginTop: 10,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    listButton: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    ListTitle: {marginLeft: 15},
    label: {
      fontSize: 18,
      color: theme.colors.primary,
    },
    tagLabel: {marginTop: -5, color: theme.colors.backdrop},
    open: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      borderEndColor: theme.colors.white,
      borderRightWidth: 1,
      borderStartColor: theme.colors.white,
      borderLeftWidth: 1,
    },
  });
  return (
    <View style={style.container}>
      <View style={style.qrContainer}>
        <View style={style.imageContainer}>
          <Image
            resizeMode="cover"
            style={style.image}
            source={require('../../../Component/Asset/qr.png')}
          />
        </View>
        <Text style={style.codeTitleQr}>SHP00078</Text>
        <Text style={style.accountName}>Nur Hamsah</Text>
      </View>
      <View style={{padding: 20}}>
        <View style={style.accountProgress}>
          <View style={style.accountProgressTitle}>
            <Text style={style.valueProgress} variant="headlineMedium">
              27
            </Text>
            <Text style={style.valueProgressTitle}>Total Orders</Text>
          </View>
          <View style={style.poin}>
            <Text style={style.valueProgress} variant="headlineMedium">
              6
            </Text>
            <Text style={style.valueProgressTitle}>Total Poin</Text>
          </View>
          <View style={style.accountProgressTitle}>
            <Text style={style.valueProgress} variant="headlineMedium">
              2.4K
            </Text>
            <Text style={style.valueProgressTitle}>Total Spend</Text>
          </View>
        </View>
        <View style={{marginTop: 20}}>
          {buttonList.map((item, index) => (
            <TouchableOpacity
              onPress={item.action}
              style={style.bottomMenuContainer}
              key={index}>
              <View style={style.listButton}>
                <AntDesign
                  name={item.leftIcon}
                  color={theme.colors.primary}
                  size={25}
                />
                <View style={style.ListTitle}>
                  <Text style={style.label}>{item.label}</Text>
                  <Text style={style.tagLabel}>{item.tagLabel}</Text>
                </View>
              </View>
              <AntDesign
                name={item.rightIcon}
                color={theme.colors.primary}
                size={20}
              />
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
}

export default AccountScreen;
