import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {
  ILHeadOfLaboratory,
  ILHeadOfLaboratoryAssistant,
  ILHeadOfNetworking,
  ILHeadOfProgramming,
  ILLaboran,
} from '../../../assets';
import {colors, fonts} from '../../../utils';

const InformationCategory = ({profession, name, onPress}) => {
  const Icon = () => {
    if (profession === 'Head of Laboratory') {
      return <ILHeadOfLaboratory style={styles.ilustration} />;
    }
    if (profession === 'Laboran') {
      return <ILLaboran style={styles.ilustration} />;
    }
    if (profession === 'Head of Laboratory Assistant') {
      return <ILHeadOfLaboratoryAssistant style={styles.ilustration} />;
    }
    if (profession === 'Head of Programming') {
      return <ILHeadOfProgramming style={styles.ilustration} />;
    }
    if (profession === 'Head of Networking') {
      return <ILHeadOfNetworking style={styles.ilustration} />;
    }
    return <ILHeadOfLaboratory style={styles.ilustration} />;
  };
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Icon />
      <Text style={styles.label}>{profession}</Text>
      <Text style={styles.category}>{name}</Text>
    </TouchableOpacity>
  );
};

export default InformationCategory;

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: colors.cardLight,
    alignSelf: 'flex-start',
    borderRadius: 10,
    marginRight: 10,
    width: 110,
    height: 175,
  },
  ilustration: {
    marginBottom: 28,
  },
  label: {
    fontSize: 12,
    fontFamily: fonts.primary[300],
    color: colors.text.primary,
  },
  category: {
    fontSize: 12,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
  },
});
