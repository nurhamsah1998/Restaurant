import React from 'react';
import {
  View,
  SafeAreaView,
  Keyboard,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Text} from 'react-native-paper';
import {Formik} from 'formik';
import {useDispatch} from 'react-redux';

import MyButton from '../../Component/Element/MyButton';
import {useNavigation} from '@react-navigation/native';
import MyTypography from '../../Component/Element/MyTypography';
import MyTextField from '../../Component/Element/MyTextField';
import {theme} from '../../App';
import {register} from '../../Store/AuthReducer';

const DismissKeyBoard = ({children}) => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {children}
    </TouchableWithoutFeedback>
  );
};

export default function Register({navigation}) {
  const navigate = useNavigation();
  const [showPassword, setShowPassword] = React.useState(true);
  return (
    <DismissKeyBoard>
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-start',
          alignItems: 'center',
          backgroundColor: theme.colors.white,
        }}>
        <View style={{width: '100%'}}>
          <View style={{marginHorizontal: 15}}>
            <Image
              style={{width: '50%', alignSelf: 'center'}}
              resizeMode="center"
              source={require('../../Component/Asset/RC-flex.png')}
            />
            <View style={{marginBottom: 30}}>
              <Text variant="displaySmall">Register</Text>
            </View>
            <SafeAreaView>
              <Formik
                initialValues={{email: 'nurhamsah', password: '2'}}
                onSubmit={async values => {
                  const jsonValue = JSON.stringify(values);
                  await AsyncStorage.setItem('@access_token', jsonValue).then(
                    res => {
                      navigate.navigate('OnBoardding');
                    },
                  );
                }}>
                {({handleChange, handleBlur, handleSubmit, values}) => (
                  <View>
                    <MyTextField
                      size="large"
                      onChangeText={handleChange('email')}
                      onBlur={handleBlur('email')}
                      value={values.email}
                      placeholder="Email"
                    />
                    <MyTextField
                      size="large"
                      onChangeText={handleChange('password')}
                      onBlur={handleBlur('password')}
                      value={values.password}
                      sx={{marginTop: 20}}
                      placeholder="Password"
                      rightIcon={showPassword ? 'eye-off' : 'eye'}
                      onPressRightIcon={() => setShowPassword(!showPassword)}
                      secure={showPassword}
                    />
                    <View style={{marginTop: 25}}>
                      <Text
                        style={{
                          textAlign: 'center',
                          color: theme.colors.backdrop,
                        }}>
                        By Registering you agree{' '}
                        <Text
                          style={{
                            color: theme.colors.primary,
                            fontWeight: '700',
                          }}>
                          Privacy{' '}
                        </Text>
                        and{' '}
                        <Text
                          style={{
                            color: theme.colors.primary,
                            fontWeight: '700',
                          }}>
                          Policy{' '}
                        </Text>
                        nur's Restaurant
                      </Text>
                    </View>
                    <MyButton
                      onPress={handleSubmit}
                      mode="contained"
                      sx={{marginTop: 25}}
                      title="Register"
                      color="secondary"
                    />
                    <View
                      style={{
                        marginTop: 20,
                        flexDirection: 'row',
                      }}>
                      <Text>Already have an account ? </Text>
                      <Text
                        style={{
                          color: theme.colors.primary,
                          fontFamily: 'Poppins-Bold',
                        }}
                        onPress={() => navigate.navigate('Login')}>
                        Login
                      </Text>
                    </View>
                  </View>
                )}
              </Formik>
            </SafeAreaView>
          </View>
        </View>
      </View>
    </DismissKeyBoard>
  );
}
