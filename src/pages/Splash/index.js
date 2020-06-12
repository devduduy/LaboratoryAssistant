import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {ILLogo} from '../../assets';
import {colors, fonts} from '../../utils';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('GetStarted');
    }, 2500);
  }, [navigation]);
  return (
    <View style={styles.page}>
      <ILLogo />
      <Text style={styles.title}>Laboratory Assistant</Text>
      <Text style={styles.subtitle}>
        Fakultas Ilmu Komputer {'\n'}Universitas Mercu Buana
      </Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 23,
    color: colors.text.primary,
    marginTop: 15,
    fontFamily: fonts.primary[600],
  },
  subtitle: {
    fontSize: 16,
    color: colors.text.primary,
    marginTop: 10,
    fontFamily: fonts.primary[600],
  },
});
