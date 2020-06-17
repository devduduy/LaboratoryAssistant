import React from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import {Button, Gap, Header, Input} from '../../components';
import {colors, fonts} from '../../utils';
import {ILLogo} from '../../assets';

const Register = ({navigation}) => {
  return (
    <ScrollView style={styles.page} showsVerticalScrollIndicator={false}>
      <Header onPress={() => navigation.goBack()} title="Register" />
      <View style={styles.content}>
        <View style={styles.wrapperTitle}>
          <ILLogo style={styles.image} />
          <Text style={styles.title}>Lets Start Joining ! </Text>
        </View>
        <Gap height={20} />
        <Input label="Full Name" placeholder="Your full name here.." />
        <Gap height={24} />
        <Input label="Major" placeholder="Your major here.." />
        <Gap height={24} />
        <Input label="Email" placeholder="Your email .." />
        <Gap height={24} />
        <Input label="Password" placeholder="Your password .." />
        <Gap height={40} />
        <Button
          title="Continue"
          onPress={() => navigation.navigate('UploadPhoto')}
        />
      </View>
    </ScrollView>
  );
};

export default Register;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
  wrapperTitle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    marginRight: 20,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
  },
  content: {
    padding: 40,
    paddingTop: 0,
  },
});
