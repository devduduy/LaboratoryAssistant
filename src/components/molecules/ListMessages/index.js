import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {DummyDoctor2} from '../../../assets';
import {colors, fonts} from '../../../utils';

const ListMessages = () => {
  return (
    <View style={styles.container}>
      <Image source={DummyDoctor2} style={styles.avatar} />
      <View>
        <Text style={styles.name}>Muhammad Raisah</Text>
        <Text style={styles.messages}>
          Baik pak, terima kasih banyak atas wakt...
        </Text>
      </View>
    </View>
  );
};

export default ListMessages;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    alignItems: 'center',
  },
  avatar: {
    width: 46,
    height: 46,
    marginRight: 12,
  },
  name: {
    fontSize: 16,
    fontFamily: fonts.primary.normal,
    color: colors.text.primary,
  },
  desc: {
    fontSize: 12,
    fontFamily: fonts.primary[300],
    color: colors.text.secondary,
  },
});
