import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {ILLogo} from '../../assets';

const Splash = () => {
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
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 23,
    fontWeight: '600',
    color: '#112340',
    marginTop: 15,
    fontFamily: 'Nunito-SemiBold',
  },
  subtitle: {
    fontSize: 16,
    color: '#112340',
    marginTop: 10,
    fontFamily: 'Nunito-SemiBold',
  },
});
