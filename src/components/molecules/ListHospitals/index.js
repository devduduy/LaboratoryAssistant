import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {DummyHospital1} from '../../../assets';
import {colors, fonts} from '../../../utils';

const ListHospitals = () => {
  return (
    <View style={styles.container}>
      <Image source={DummyHospital1} style={styles.picture} />
      <View>
        <Text style={styles.name}>Rumah Sakit Cipto Mangunkusumo</Text>
        <Text style={styles.address}>Jl.Dipenogoro, Jakarta Pusat</Text>
      </View>
    </View>
  );
};

export default ListHospitals;

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
  address: {
    fontSize: 12,
    fontFamily: fonts.primary[300],
    color: colors.text.secondary,
    marginTop: 6,
  },
});
