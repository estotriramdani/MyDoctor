import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {DummyDoctor1, DummyDoctor2, DummyDoctor3} from '../../assets';
import {ListDoctor} from '../../component';
import {colors, fonts} from '../../utils';

const Messages = () => {
  const [doctors] = useState([
    {
      id: 1,
      profile: DummyDoctor3,
      name: 'Alexander Jannie',
      desc: 'Baik ibu, terima kasih banyak atas wakt...',
    },
    {
      id: 2,
      profile: DummyDoctor2,
      name: 'Asep Sumedang',
      desc: 'Oh tentu saja...',
    },
    {
      id: 3,
      profile: DummyDoctor1,
      name: 'Wawan Ujang',
      desc: 'Ah tentu saja...',
    },
  ]);
  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <Text style={styles.title} t>
          Messages
        </Text>
        {doctors.map((doctor) => {
          return (
            <ListDoctor
              key={doctor.id}
              profile={doctor.profile}
              name={doctor.name}
              desc={doctor.desc}
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
    color: colors.black,
    marginTop: 30,
    marginLeft: 16,
  },
});
