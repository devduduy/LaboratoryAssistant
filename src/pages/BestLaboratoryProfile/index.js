import React from 'react';
import {StyleSheet, View} from 'react-native';
import {
  BestLaboratoryProfileItem,
  Button,
  Gap,
  Header,
  Profile,
} from '../../components';
import {colors} from '../../utils';
const BestLaboratoryProfile = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header
        title="Best Laboratory Profile"
        onPress={() => navigation.goBack()}
      />
      <Profile name="Yudha Permana" major="Teknik Informatika" />
      <Gap height={10} />
      <BestLaboratoryProfileItem label="NIM" value="41516010035" />
      <BestLaboratoryProfileItem label="Join Semester" value="3" />
      <BestLaboratoryProfileItem
        label="Achievement"
        value="Won 1st in the web design competition"
      />
      <View style={styles.btnTips}>
        <Button
          title="Ask Tips"
          onPress={() => navigation.navigate('Chatting')}
        />
      </View>
    </View>
  );
};

export default BestLaboratoryProfile;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
  btnTips: {
    paddingHorizontal: 40,
    paddingTop: 23,
  },
});
