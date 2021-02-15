import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Button, Gap, Header, Link } from '../../component'
import { IconAddPhoto, ILNullPhoto } from '../../assets'
import { colors, fonts } from '../../utils'

const UploadPhoto = () => {
  return (
    <View style={styles.page}>
      <Header title="Upload Photo" />
      <View style={styles.content}>
        <View style={styles.profile}>
          <View style={styles.avatarWrapper}>
            <Image source={ILNullPhoto} style={styles.avatar} />
            <IconAddPhoto style={styles.addPhoto} />
          </View>
          <Text style={styles.name}>Nama</Text>
          <Text style={styles.profession}>Pekerjaan</Text>
        </View>
        <View>
          <Button title="Upload and Continue" />
          <Gap height={30} />
          <Link label="Skip for this" align="center" size={16} />
        </View>
      </View>
    </View>
  )
}

export default UploadPhoto

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1
  },
  content: {
    paddingHorizontal: 40,
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: 40
  },
  profile: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  avatar: {
    width: 110,
    height: 110,
  },
  avatarWrapper: {
    position: 'relative',
    width: 130,
    height: 130,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 130 / 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  addPhoto: {
    position: 'absolute',
    right: 6,
    bottom: 8,
  },
  name: {
    fontSize: 24,
    color: colors.text.primary,
    fontFamily: fonts.primary[600],
    textAlign: 'center'
  },
  profession: {
    fontSize: 18,
    fontFamily: fonts.primary.normal,
    textAlign: 'center',
    color: colors.secondary
  }
})
