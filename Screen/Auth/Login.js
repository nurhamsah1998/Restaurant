import React from 'react';
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
import {theme} from '../../App';
import {AuthToken} from '../Routing/contextHelper';
import {Button, Text} from 'react-native-paper';
import Snackbar from 'react-native-snackbar';

export const DismissKeyBoard = ({children}) => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {children}
    </TouchableWithoutFeedback>
  );
};

export default function Login() {
  const navigate = useNavigation();
  const {signIn} = React.useContext(AuthToken);
  return (
    <DismissKeyBoard>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: theme.colors.white,
        }}>
        <View style={{width: '100%'}}>
          <View style={{marginHorizontal: 15}}>
            <View style={{marginBottom: 30}}>
              <Text variant="displaySmall">Login</Text>
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
                      signIn();
                    } else {
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
                      placeholder="Password"
                      secure
                    />
                    <MyButton
                      onPress={handleSubmit}
                      mode="contained"
                      sx={{marginTop: 25}}
                      size="large"
                      title="login"
                    />
                    <View
                      style={{
                        marginTop: 20,
                      }}>
                      <Text>You don't have an account ?</Text>
                      <MyButton
                        onPress={() => navigate.navigate('Register')}
                        mode="contained"
                        size="large"
                        title="Register"
                        color="secondary"
                      />
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
