import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {IconStar} from '../../../assets';
import {colors, fonts} from '../../../utils';

const BestLaboratory = ({profile, name, major}) => {
  return (
    <View style={styles.container}>
      <Image source={profile} style={styles.avatar} />
      <View style={styles.profile}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.profession}>{major}</Text>
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
    borderRadius: 25,
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
