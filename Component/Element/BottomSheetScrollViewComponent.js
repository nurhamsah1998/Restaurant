import React, {useCallback, useRef, useMemo} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import BottomSheet, {
  BottomSheetScrollView,
  BottomSheetBackdrop,
  BottomSheetFooter,
} from '@gorhom/bottom-sheet';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {theme} from '../../App';
import MyButton from './MyButton';

const BottomSheetScrollViewComponent = ({
  children,
  sheetRef,
  content,
  title,
  onPressSubmit,
  cancelLabel,
  submitLabel,
  quantity,
}) => {
  // hooks

  // variables
  const snapPoints = useMemo(() => ['69%', '70%'], []);

  // style
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    contentContainer: {
      backgroundColor: theme.colors.white,
      paddingHorizontal: 20,
    },
    footerContainer: {
      backgroundColor: theme.colors.white,
      paddingHorizontal: 20,
    },
    footerText: {
      textAlign: 'center',
      color: 'white',
      fontWeight: '800',
    },
    title: {
      fontFamily: 'Poppins-Bold',
      fontSize: 20,
      color: '#000',
    },
    myButton: {
      flexDirection: 'row',
    },
    seperator: {marginHorizontal: 5},
    containerChildren: {flex: 1},
  });

  // callbacks
  const handleClosePress = useCallback(() => {
    sheetRef.current?.close();
  }, []);
  // render
  const renderFooter = useCallback(
    props => {
      return (
        <BottomSheetFooter {...props} bottomInset={24}>
          <View style={styles.footerContainer}>
            <View style={styles.myButton}>
              <MyButton
                sx={{flex: 1}}
                onPress={handleClosePress}
                title={cancelLabel}
              />
              <View style={styles.seperator} />
              <MyButton
                sx={{flex: 1}}
                mode="contained"
                onPress={onPressSubmit}
                title={submitLabel}
              />
            </View>
          </View>
        </BottomSheetFooter>
      );
    },
    [quantity],
  );
  const renderBackdrop = useCallback(
    props => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={2}
      />
    ),
    [],
  );
  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.containerChildren}>{children}</View>
      <BottomSheet
        enablePanDownToClose
        ref={sheetRef}
        index={-1}
        snapPoints={snapPoints}
        backdropComponent={renderBackdrop}
        footerComponent={renderFooter}>
        <BottomSheetScrollView contentContainerStyle={styles.contentContainer}>
          <Text style={styles.title}>{title}</Text>
          {content}
        </BottomSheetScrollView>
      </BottomSheet>
    </GestureHandlerRootView>
  );
};

export default BottomSheetScrollViewComponent;
