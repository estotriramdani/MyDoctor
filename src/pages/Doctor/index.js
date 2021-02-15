import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {
  DoctorCategory,
  Gap,
  HomeProfile,
  NewsItem,
  RatedDoctor,
} from '../../component';
import {colors, fonts} from '../../utils';

const Doctor = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.page}>
        <View style={styles.content}>
          <HomeProfile />
          <Text style={styles.welcome}>
            Mau konsultasi dengan siapa hari ini?
          </Text>
          <View style={styles.wrapperScroll}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.category}>
                <Gap width={16} />
                <DoctorCategory />
                <DoctorCategory />
                <DoctorCategory />
                <DoctorCategory />
                <Gap width={6} />
              </View>
            </ScrollView>
          </View>
          <View style={styles.wrapperSection}>
            <Text style={styles.sectionLabel}>Top Rated Doctors</Text>
            <RatedDoctor />
            <RatedDoctor />
            <RatedDoctor />
            <Text style={styles.sectionLabel}>Good News</Text>
            <NewsItem />
            <NewsItem />
            <NewsItem />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Doctor;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.secondary,
    flex: 1,
  },
  content: {
    backgroundColor: colors.white,
    paddingVertical: 30,
    paddingHorizontal: 16,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    flex: 1,
  },
  wrapperSection: {},
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
  sectionLabel: {
    fontSize: 16,
    color: colors.text.primary,
    fontFamily: fonts.primary[600],
    marginTop: 30,
    marginBottom: 16,
  },
});
