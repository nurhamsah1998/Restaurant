import React from 'react';
import {
  View,
  SafeAreaView,
  Keyboard,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {Formik} from 'formik';
import {Text} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import Snackbar from 'react-native-snackbar';
import {useDispatch} from 'react-redux';

import MyTextField from '../../Component/Element/MyTextField';
import {theme} from '../../App';
import {login} from '../../Store/AuthReducer';
import MyButton from '../../Component/Element/MyButton';

export const DismissKeyBoard = ({children}) => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {children}
    </TouchableWithoutFeedback>
  );
};

export default function Login() {
  const navigate = useNavigation();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = React.useState(true);
  const [loading, setLoading] = React.useState(false);
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
              <Text variant="displaySmall">Login</Text>
            </View>
            <SafeAreaView>
              <Formik
                initialValues={{email: '', password: ''}}
                onSubmit={async values => {
                  setLoading(true);
                  try {
                    if (
                      values?.email?.includes('nurhamsah') &&
                      values?.password?.includes('1')
                    ) {
                      const jsonValue = JSON.stringify(values);
                      await AsyncStorage.setItem('@access_token', jsonValue)
                        .then(res => {
                          setLoading(false);
                          dispatch(login());
                        })
                        .catch(err => console.log(err));
                    } else {
                      setLoading(false);
                      Snackbar.show({
                        text: 'Check your email or password!',
                        duration: Snackbar.LENGTH_SHORT,
                        backgroundColor: theme.colors.error,
                      });
                    }
                  } catch (e) {
                    console.warn(e);
                  }
                }}>
                {({handleChange, handleBlur, handleSubmit, values}) => (
                  <View>
                    <MyTextField
                      size="large"
                      onChangeText={handleChange('email')}
                      onBlur={handleBlur('email')}
                      value={values.email}
                      placeholder="Enter your username"
                    />
                    <MyTextField
                      size="large"
                      onChangeText={handleChange('password')}
                      onBlur={handleBlur('password')}
                      value={values.password}
                      sx={{marginTop: 20}}
                      rightIcon={showPassword ? 'eye-off' : 'eye'}
                      onPressRightIcon={() => setShowPassword(!showPassword)}
                      secure={showPassword}
                      placeholder="Password"
                    />
                    <MyButton
                      onPress={handleSubmit}
                      mode="contained"
                      loading={loading}
                      disabled={loading}
                      sx={{marginTop: 25}}
                      size="large"
                      title="login"
                    />
                    <View
                      style={{
                        marginTop: 20,
                        flexDirection: 'row',
                      }}>
                      <Text>You don't have an account ? </Text>
                      <Text
                        style={{
                          color: theme.colors.primary,
                          fontFamily: 'Poppins-Bold',
                        }}
                        onPress={() => navigate.navigate('Register')}>
                        Register
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
