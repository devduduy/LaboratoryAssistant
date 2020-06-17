import React from 'react';
import {StyleSheet, View} from 'react-native';
import {DummyMembers3} from '../../assets';
import {Header, ListMessages} from '../../components';
import {colors} from '../../utils';

const ChooseInformation = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header
        type="dark"
        title="Pilih Ifan Prihandi"
        onPress={() => navigation.goBack()}
      />
      <ListMessages
        type="next"
        profile={DummyMembers3}
        name="Ifan Prihandi"
        desc="Head of Laboratory"
        onPress={() => navigation.navigate('Chatting')}
      />
    </View>
  );
};

export default ChooseInformation;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
});
