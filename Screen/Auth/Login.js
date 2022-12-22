import React, {useCallback} from 'react';
import {useIsFocused} from '@react-navigation/native';
import {
  View,
  SafeAreaView,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import MyButton from '../../Component/Element/MyButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Formik} from 'formik';
import {useNavigation} from '@react-navigation/native';
import MyTypography from '../../Component/Element/MyTypography';
import MyTextField from '../../Component/Element/MyTextField';

const DismissKeyBoard = ({children}) => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {children}
    </TouchableWithoutFeedback>
  );
};

export default function Login({navigation}) {
  const navigate = useNavigation();
  return (
    <DismissKeyBoard>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          marginHorizontal: 15,
        }}>
        <View style={{marginHorizontal: 15}}>
          <View style={{width: '100%'}}>
            <View style={{marginBottom: 30}}>
              <MyTypography
                style={{textAlign: 'left'}}
                title="Login"
                variant="h1"
              />
              <MyTypography
                sx={{
                  textAlign: 'left',
                  color: 'gray',
                  fontWeight: '200',
                  marginTop: 20,
                }}
                variant="h4"
                title="my-Money"
              />
              <MyTypography
                sx={{textAlign: 'left', color: 'gray', fontWeight: '200'}}
                title="my money is an application for spending money or receiving money. available by category as personal and corporate."
              />
            </View>
            <SafeAreaView>
              <Formik
                initialValues={{email: '', password: ''}}
                onSubmit={async values => {
                  try {
                    if (
                      values?.email?.includes('nurhamsah') &&
                      values?.password?.includes('1')
                    ) {
                      const jsonValue = JSON.stringify(values);
                      await AsyncStorage.setItem('@access_token', jsonValue);
                      navigate.navigate('Dashboard');
                    } else {
                      console.warn('Error');
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
                      label="Email"
                    />
                    <MyTextField
                      size="large"
                      onChangeText={handleChange('password')}
                      onBlur={handleBlur('password')}
                      value={values.password}
                      sx={{marginTop: 20}}
                      label="Password"
                    />
                    <MyButton
                      onPress={handleSubmit}
                      variant="contained"
                      sx={{marginTop: 25}}
                      size="large"
                      title="login"
                    />
                    <View
                      style={{
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        marginTop: 10,
                      }}>
                      <View>
                        <MyTypography title="Does'nt have account? " />
                      </View>
                      <View>
                        <MyTypography title="Register" />
                      </View>
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
