import * as React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
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
  return (
    <View style={{flex: 1, backgroundColor: theme.colors.white}}>
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          backgroundColor: theme.colors.primary,
          justifyContent: 'center',
          alignItems: 'center',
          paddingVertical: 20,
          borderBottomEndRadius: 30,
          borderBottomStartRadius: 30,
        }}>
        <View
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            backgroundColor: theme.colors.white,
            width: 200,
            height: 200,
            padding: 15,
            borderRadius: 20,
          }}>
          <Image
            resizeMode="cover"
            style={{width: '100%', height: '100%'}}
            source={require('../../../Component/Asset/qr.png')}
          />
        </View>
        <Text
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            fontFamily: 'Poppins-Bold',
            fontSize: 21,
            color: theme.colors.white,
            marginTop: 10,
          }}>
          SHP00078
        </Text>
        <Text
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            fontSize: 21,
            color: theme.colors.white,
            marginTop: -5,
          }}>
          Nur Hamsah
        </Text>
      </View>
      <View style={{padding: 20}}>
        <View
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            height: 90,
            width: '100%',
            borderRadius: 20,
            backgroundColor: theme.colors.primary,
            paddingVertical: 20,
            flexDirection: 'row',
          }}>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{color: theme.colors.white, fontSize: 24}}>27</Text>
            <Text
              // eslint-disable-next-line react-native/no-inline-styles
              style={{
                color: theme.colors.white,
                fontSize: 15,
                fontFamily: 'Poppins-Bold',
              }}>
              Total Orders
            </Text>
          </View>
          <View
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              borderEndColor: theme.colors.white,
              borderRightWidth: 1,
              borderStartColor: theme.colors.white,
              borderLeftWidth: 1,
            }}>
            <Text style={{color: theme.colors.white, fontSize: 24}}>6</Text>
            <Text
              // eslint-disable-next-line react-native/no-inline-styles
              style={{
                color: theme.colors.white,
                fontSize: 15,
                fontFamily: 'Poppins-Bold',
              }}>
              Total Poin
            </Text>
          </View>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{color: theme.colors.white, fontSize: 24}}>2.4K</Text>
            <Text
              // eslint-disable-next-line react-native/no-inline-styles
              style={{
                color: theme.colors.white,
                fontSize: 15,
                fontFamily: 'Poppins-Bold',
              }}>
              Total Spend
            </Text>
          </View>
        </View>
        <View style={{marginTop: 20}}>
          {buttonList.map((item, index) => (
            <TouchableOpacity
              onPress={item.action}
              // eslint-disable-next-line react-native/no-inline-styles
              style={{
                marginTop: 10,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
              key={index}>
              <View
                // eslint-disable-next-line react-native/no-inline-styles
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <AntDesign
                  name={item.leftIcon}
                  color={theme.colors.primary}
                  size={25}
                />
                <View style={{marginLeft: 15}}>
                  <Text
                    // eslint-disable-next-line react-native/no-inline-styles
                    style={{
                      fontSize: 18,
                      color: theme.colors.primary,
                    }}>
                    {item.label}
                  </Text>
                  <Text style={{marginTop: -5, color: theme.colors.backdrop}}>
                    {item.tagLabel}
                  </Text>
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
