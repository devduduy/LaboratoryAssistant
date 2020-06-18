import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {ILLogo} from '../../assets';
import {Button, Gap, Header, Input, Loading} from '../../components';
import {colors, fonts, useForm} from '../../utils';
import {Fire} from '../../config';
import {showMessage, hideMessage} from 'react-native-flash-message';

const Register = ({navigation}) => {
  // const [fullName, setFullName] = useState('');
  // const [major, setMajor] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const [form, setForm] = useForm({
    fullName: '',
    major: '',
    email: '',
    password: '',
  });

  const [loading, setLoading] = useState(false);

  const onContinue = () => {
    console.log(form);
    setLoading(true);
    Fire.auth()
      .createUserWithEmailAndPassword(form.email, form.password)
      .then(success => {
        setLoading(false);
        setForm('reset');
        console.log('register success: ', success);
      })
      .catch(error => {
        const errorMessage = error.message;
        setLoading(false);
        showMessage({
          message: errorMessage,
          type: 'danger',
          backgroundColor: colors.errorMessage,
          color: colors.white,
          duration: 2500,
        });
      });
  };
  return (
    <>
      <ScrollView style={styles.page} showsVerticalScrollIndicator={false}>
        <Header onPress={() => navigation.goBack()} title="Register" />
        <View style={styles.content}>
          <View style={styles.wrapperTitle}>
            <ILLogo style={styles.image} />
            <Text style={styles.title}>Lets Start Joining ! </Text>
          </View>
          <Gap height={20} />
          <Input
            label="Full Name"
            placeholder="Your full name here.."
            value={form.fullName}
            onChangeText={value => setForm('fullName', value)}
          />
          <Gap height={24} />
          <Input
            label="Major"
            placeholder="Your major here.."
            value={form.major}
            onChangeText={value => setForm('major', value)}
          />
          <Gap height={24} />
          <Input
            label="Email"
            placeholder="Your email .."
            value={form.email}
            onChangeText={value => setForm('email', value)}
          />
          <Gap height={24} />
          <Input
            label="Password"
            placeholder="Your password .."
            value={form.password}
            onChangeText={value => setForm('password', value)}
            secureTextEntry
          />
          <Gap height={40} />
          <Button title="Continue" onPress={onContinue} />
        </View>
      </ScrollView>
      {loading && <Loading />}
    </>
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
