import React, {useCallback} from 'react';
import {useIsFocused} from '@react-navigation/native';
import {
  View,
  SafeAreaView,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MyButton from '../../Component/Element/MyButton';
import {Formik} from 'formik';
import {useNavigation} from '@react-navigation/native';
import MyTypography from '../../Component/Element/MyTypography';
import MyTextField from '../../Component/Element/MyTextField';
import {theme} from '../../App';
import {Text} from 'react-native-paper';

const DismissKeyBoard = ({children}) => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {children}
    </TouchableWithoutFeedback>
  );
};

export default function Register({navigation}) {
  const navigate = useNavigation();
  return (
    <DismissKeyBoard>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: theme.colors.white,
        }}>
        <View style={{marginHorizontal: 15}}>
          <View style={{width: '100%'}}>
            <View style={{marginBottom: 30}}>
              <MyTypography
                style={{textAlign: 'left'}}
                title="Register"
                variant="h1"
              />
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
                      secure
                    />
                    <View style={{marginTop: 25}}>
                      <Text
                        style={{
                          textAlign: 'center',
                          color: theme.colors.backdrop,
                        }}>
                        By Registering you aggree{' '}
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
                      variant="contained"
                      sx={{marginTop: 25}}
                      title="Register"
                      color="secondary"
                    />
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
