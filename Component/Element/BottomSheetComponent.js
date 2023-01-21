/// code from https://github.com/mrbrentkelly
/// issue : https://github.com/osdnk/react-native-reanimated-bottom-sheet/issues/243

import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated, {FadeInLeft} from 'react-native-reanimated';
import Modal from 'react-native-modal';
import {theme} from '../../App';
import MyButton from './MyButton';

export default function SheetModal({
  isVisible,
  onDismiss,
  content,
  submitTitle,
  disabledOnSubmit,
  onPressSubmit,
  title,
  readOnly,
  height = '50%',
}) {
  const styles = StyleSheet.create({
    modal: {
      margin: 0,
    },
    container: {
      flex: 1,
    },
    sheetHeader: {
      backgroundColor: theme.colors.white,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    },
    sheetContent: {
      backgroundColor: theme.colors.white,
      paddingHorizontal: 15,
      paddingTop: 10,
      paddingBottom: 0,
    },
    panelHeader: {
      alignItems: 'center',
      paddingVertical: 10,
    },
    panelHandle: {
      width: 40,
      height: 8,
      borderRadius: 4,
      marginBottom: 10,
    },
    bottomButton: {
      flexDirection: 'row',
      position: 'absolute',
      bottom: 20,
    },
  });
  return (
    <Modal style={styles.modal} isVisible={isVisible} onDismiss={onDismiss}>
      <View style={styles.container} pointerEvents="box-none">
        <BottomSheet
          initialSnap={0}
          snapPoints={[height, 0]}
          onCloseEnd={onDismiss}
          renderHeader={() => (
            <View style={styles.sheetHeader}>
              <View style={styles.panelHeader}>
                <Text variant="headlineSmall">{title}</Text>
              </View>
            </View>
          )}
          renderContent={() => (
            <View style={styles.sheetContent}>
              <View
                style={{
                  // backgroundColor: '#eee',
                  borderRadius: 4,
                  height: '100%',
                  position: 'relative',
                }}>
                {content}
                <View style={styles.bottomButton}>
                  <MyButton
                    sx={{flex: 1, marginRight: readOnly ? 0 : 10}}
                    color={readOnly ? 'info' : 'error'}
                    title="Close"
                    mode={readOnly ? 'contained' : 'outlined'}
                    onPress={onDismiss}
                  />
                  {readOnly ? null : (
                    <MyButton
                      disabled={disabledOnSubmit}
                      sx={{flex: 1}}
                      mode="contained"
                      onPress={onPressSubmit}
                      title={submitTitle}
                    />
                  )}
                </View>
              </View>
            </View>
          )}
        />
      </View>
    </Modal>
  );
}
