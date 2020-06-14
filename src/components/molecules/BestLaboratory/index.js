import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {DummyBestLaboratory1, IconStar} from '../../../assets';
import {fonts, colors} from '../../../utils';

const BestLaboratory = () => {
  return (
    <View style={styles.container}>
      <Image source={DummyBestLaboratory1} style={styles.avatar} />
      <View style={styles.profile}>
        <Text style={styles.name}>Jessica Sabrina</Text>
        <Text style={styles.profession}>Sistem Informasi</Text>
      </View>
      <View style={styles.star}>
        <IconStar />
        <IconStar />
        <IconStar />
        <IconStar />
        <IconStar />
      </View>
    </View>
  );
};

export default BestLaboratory;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  avatar: {
    width: 50,
    height: 50,
    marginRight: 12,
  },
  profile: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
  },
  profession: {
    fontSize: 12,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
    marginTop: 2,
  },
  star: {
    flexDirection: 'row',
  },
});
