import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
} from 'react-native';
import {DummyHospitalBg} from '../../assets/dummy';
import {fonts, colors} from '../../utils';
import {ListHospitals} from '../../components';

const Hospitals = () => {
  return (
    <View style={styles.page}>
      <ImageBackground source={DummyHospitalBg} style={styles.background}>
        <Text style={styles.title}>Nearby Hospitals</Text>
        <Text style={styles.desc}>3 tersedia</Text>
      </ImageBackground>
      <View style={styles.content}>
        <ScrollView>
          <ListHospitals />
          <ListHospitals />
          <ListHospitals />
          <ListHospitals />
          <ListHospitals />
          <ListHospitals />
          <ListHospitals />
          <ListHospitals />
        </ScrollView>
      </View>
    </View>
  );
};

export default Hospitals;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.secondary,
    flex: 1,
  },
  background: {
    height: 240,
    paddingTop: 30,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.white,
    textAlign: 'center',
  },
  desc: {
    fontSize: 14,
    fontFamily: fonts.primary[300],
    color: colors.white,
    marginTop: 6,
    textAlign: 'center',
  },
  content: {
    backgroundColor: colors.white,
    borderRadius: 20,
    flex: 1,
    marginTop: -30,
    paddingTop: 14,
  },
});
