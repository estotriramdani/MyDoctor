import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {DummyNews1} from '../../../assets';
import {fonts, colors} from '../../../utils';

const NewsItem = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>
          Is it sfae to stay at home during corona virus?
        </Text>
        <Text style={styles.date}>Today</Text>
      </View>
      <Image source={DummyNews1} style={styles.image} />
    </View>
  );
};

export default NewsItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    paddingBottom: 12,
    paddingTop: 16,
  },
  titleWrapper: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    maxWidth: '90%',
  },
  date: {
    fontSize: 12,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
  },
  image: {
    width: 80,
    height: 60,
    borderRadius: 11,
  },
});
