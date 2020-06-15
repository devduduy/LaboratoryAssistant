import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ListMessages} from '../../components';
import {colors, fonts} from '../../utils';
import {DummyMembers1, DummyMembers2, DummyMembers3} from '../../assets';

const Messages = () => {
  const [members] = useState([
    {
      id: 1,
      profile: DummyMembers2,
      name: 'Ifan Prihandi',
      desc: 'Baik Pak, terima kasih banyak atas info...',
    },
    {
      id: 2,
      profile: DummyMembers1,
      name: 'Imam Nududdin',
      desc: 'Siap Kak, nanti kalau untuk milih kelasny...',
    },
    {
      id: 3,
      profile: DummyMembers3,
      name: 'Jessica',
      desc: 'Kak jadi aslab harus bisa ngoding gak ? soaln...',
    },
  ]);
  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <Text style={styles.title}>Messages</Text>
        {members.map(member => {
          return (
            <ListMessages
              key={member.id}
              profile={member.profile}
              name={member.name}
              desc={member.desc}
            />
          );
        })}
      </View>
    </View>
  );
};

export default Messages;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.secondary,
    flex: 1,
  },
  content: {
    backgroundColor: colors.white,
    flex: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 30,
    marginLeft: 16,
  },
});
