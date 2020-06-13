import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {DummyUser} from '../../../assets';
import {fonts, colors} from '../../../utils';

const HomeProfile = () => {
  return (
    <View style={styles.container}>
      <Image source={DummyUser} style={styles.avatar} />
      <View>
        <Text style={styles.name}>Jessica Sabrina</Text>
        <Text style={styles.profession}>Data Analyst</Text>
      </View>
    </View>
  );
};

export default HomeProfile;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  avatar: {
    width: 46,
    height: 46,
    marginRight: 12,
  },
  name: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
  },
  profession: {
    fontSize: 12,
    fontFamily: fonts.primary[400],
    color: colors.text.secondary,
  },
});
