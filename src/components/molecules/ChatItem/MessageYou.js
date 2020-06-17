import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {fonts, colors} from '../../../utils';
import {DummyMembers3} from '../../../assets';

const MessageYou = () => {
  return (
    <View style={styles.container}>
      <Image source={DummyMembers3} style={styles.avatar} />
      <View>
        <View style={styles.chatContent}>
          <Text style={styles.textMessage}>
            Untuk jadi aslab minimal adalah semester 3
          </Text>
        </View>
        <Text>4.20 AM</Text>
      </View>
    </View>
  );
};

export default MessageYou;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    alignItems: 'flex-end',
    paddingLeft: 16,
    flexDirection: 'row',
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    marginRight: 12,
  },
  chatContent: {
    padding: 12,
    paddingRight: 18,
    backgroundColor: colors.primary,
    maxWidth: '80%',
    borderRadius: 10,
    borderBottomLeftRadius: 0,
  },
  textMessage: {
    fontSize: 14,
    fontFamily: fonts.primary.normal,
    color: colors.white,
  },
});
