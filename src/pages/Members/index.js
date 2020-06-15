import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
} from 'react-native';
import {
  DummyMembersBg,
  DummyMembers1,
  DummyMembers2,
  DummyMembers3,
  DummyMembers4,
  DummyMembers5,
  DummyMembers6,
  DummyMembers7,
  DummyMembers8,
  DummyMembers9,
} from '../../assets/dummy';
import {fonts, colors} from '../../utils';
import {ListMembers, Gap} from '../../components';

const Members = () => {
  return (
    <View style={styles.page}>
      <ImageBackground source={DummyMembersBg} style={styles.background}>
        <Text style={styles.title}>Laboratory Assistant Member</Text>
        <Text style={styles.desc}>17 members</Text>
      </ImageBackground>
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Gap height={16} />
          <ListMembers
            name="Yudha Permana"
            major="Teknik Informatika"
            generation="2016"
            picture={DummyMembers3}
          />
          <ListMembers
            name="Muhammad Raisah"
            major="Teknik Informatika"
            generation="2016"
            picture={DummyMembers6}
          />
          <ListMembers
            name="Muhammad Ammar Fakhri"
            major="Teknik Informatika"
            generation="2016"
            picture={DummyMembers9}
          />
          <ListMembers
            name="Imam Nududdin"
            major="Teknik Informatika"
            generation="2016"
            picture={DummyMembers3}
          />
          <ListMembers
            name="Amat Deska Arya"
            major="Teknik Informatika"
            generation="2016"
            picture={DummyMembers6}
          />
          <ListMembers
            name="M. Fadhil Rachman"
            major="Teknik Informatika"
            generation="2016"
            picture={DummyMembers9}
          />
          <ListMembers
            name="Jessica"
            major="Teknik Informatika"
            generation="2016"
            picture={DummyMembers1}
          />
          <ListMembers
            name="Michael Surompo"
            major="Sistem Informasi"
            generation="2016"
            picture={DummyMembers6}
          />
          <ListMembers
            name="Jody Heryanto"
            major="Teknik Informatika"
            generation="2017"
            picture={DummyMembers3}
          />
          <ListMembers
            name="Rusmanda"
            major="Teknik Informatika"
            generation="2017"
            picture={DummyMembers9}
          />
          <ListMembers
            name="Aldy Rachman"
            major="Teknik Informatika"
            generation="2018"
            picture={DummyMembers3}
          />
          <ListMembers
            name="Miskah Alfiyyah K"
            major="Sistem Informasi"
            generation="2018"
            picture={DummyMembers2}
          />
          <ListMembers
            name="Aldino Putra Siregar"
            major="Sistem Informasi"
            generation="2018"
            picture={DummyMembers6}
          />
          <ListMembers
            name="Devi Permata Sari"
            major="Sistem Informasi"
            generation="2016"
            picture={DummyMembers3}
          />
        </ScrollView>
      </View>
    </View>
  );
};

export default Members;

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
  },
});
