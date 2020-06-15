import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {
  DummyMembers3,
  DummyMembers6,
  DummyMembers8,
  DummyNews1,
  DummyNews2,
  DummyNews3,
  JSONDummy,
} from '../../assets';
import {
  BestLaboratory,
  Gap,
  HomeProfile,
  InformationCategory,
  NewsItem,
} from '../../components';
import {colors, fonts} from '../../utils';

const Home = () => {
  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.wrapperSection}>
            <Gap height={30} />
            <HomeProfile />
            <Text style={styles.welcome}>
              Who do you want to get an information?
            </Text>
          </View>
          <View style={styles.wrapperScroll}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.category}>
                <Gap width={32} />
                {JSONDummy.data.informationCategory.map(item => {
                  return (
                    <InformationCategory
                      key={item.id}
                      profession={item.profession}
                      name={item.name}
                    />
                  );
                })}
                <Gap width={22} />
              </View>
            </ScrollView>
          </View>
          <View style={styles.wrapperSection}>
            <Text style={styles.sectionLabel}>
              Best of Laboratory Assistant
            </Text>
            <BestLaboratory
              profile={DummyMembers3}
              name="Yudha Permana"
              major="Teknik Informatika"
            />
            <BestLaboratory
              profile={DummyMembers6}
              name="Jody Heryanto"
              major="Teknik Informatika"
            />
            <BestLaboratory
              profile={DummyMembers8}
              name="Devi Permata Sari"
              major="Sistem Informasi"
            />
            <Text style={styles.sectionLabel}>Good News</Text>
          </View>
          <NewsItem
            title="2 laboratory assistant members won 1st place in the coding competitive
          competition"
            date="Today"
            picture={DummyNews1}
          />
          <NewsItem
            title="An alumni of laboratory assistant enter the big startup company"
            date="A month ago"
            picture={DummyNews2}
          />
          <NewsItem
            title="An laboratory assistant member success got a published journals"
            date="Yesterday"
            picture={DummyNews3}
          />
          <NewsItem
            title="Team of laboratory assistant make a project for faculty system, it's E-surat & E-legalisir"
            date="Today"
            picture={DummyNews1}
          />
          <Gap height={30} />
        </ScrollView>
      </View>
    </View>
  );
};

export default Home;

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
  welcome: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 30,
    marginBottom: 16,
    maxWidth: 209,
  },
  category: {
    flexDirection: 'row',
  },
  wrapperScroll: {
    marginHorizontal: -16,
  },
  wrapperSection: {
    paddingHorizontal: 16,
  },
  sectionLabel: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 30,
    marginBottom: 16,
  },
});
