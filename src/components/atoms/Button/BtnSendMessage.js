import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IconBtnMessage, IconBtnMessageActive} from '../../../assets';
import {colors} from '../../../utils';

const BtnSendMessage = ({disable}) => {
  return (
    <View style={styles.container(disable)}>
      {disable && <IconBtnMessage />}
      {!disable && <IconBtnMessageActive />}
    </View>
  );
};

export default BtnSendMessage;

const styles = StyleSheet.create({
  container: disable => ({
    backgroundColor: disable ? colors.disable : colors.tertiary,
    width: 45,
    height: 45,
    borderRadius: 10,
    paddingTop: 3,
    paddingRight: 3,
    paddingBottom: 8,
    paddingLeft: 8,
  }),
});
