import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../../utils';

const ListMembers = ({picture, name, major, generation}) => {
  return (
    <View style={styles.container}>
      <Image source={picture} style={styles.picture} />
      <View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.major}>{major}</Text>
        <Text style={styles.generation}>{generation}</Text>
      </View>
    </View>
  );
};

export default ListMembers;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    borderEndWidth: 1,
    borderBottomColor: colors.border,
  },
  picture: {
    width: 80,
    height: 60,
    borderRadius: 11,
    marginRight: 16,
  },
  name: {
    fontSize: 16,
    fontFamily: fonts.primary.normal,
    color: colors.text.primary,
  },
  major: {
    fontSize: 12,
    fontFamily: fonts.primary[300],
    color: colors.text.secondary,
    marginTop: 3,
  },
  generation: {
    fontSize: 12,
    fontFamily: fonts.primary[300],
    color: colors.text.secondary,
  },
});
