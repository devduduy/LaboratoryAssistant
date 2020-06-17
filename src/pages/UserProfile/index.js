import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Header, Profile, ListMenuUserProfile, Gap} from '../../components';
import {colors} from '../../utils';

const UserProfile = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Profile" onPress={() => navigation.goBack()} />
      <Gap height={10} />
      <Profile name="Yudha Permana" major="Teknik Informatika" />
      <Gap height={14} />
      <ListMenuUserProfile
        name="Edit Profile"
        desc="Last update yesterday"
        type="next"
        icon="editProfile"
        onPress={() => {
          navigation.navigate('EditProfile');
        }}
      />
      <ListMenuUserProfile
        name="Language"
        desc="Available 12 languages"
        type="next"
        icon="language"
      />
      <ListMenuUserProfile
        name="Give Us Rate"
        desc="On Google Glay Store"
        type="next"
        icon="giveRate"
      />
      <ListMenuUserProfile
        name="Help Center"
        desc="Read our guidelines"
        type="next"
        icon="help"
      />
    </View>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
});
