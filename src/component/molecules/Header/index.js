import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { IconBackDark } from '../../../assets'
import { colors, fonts } from '../../../utils'
import { Button, Gap } from '../../atoms'

const Header = ({ title, onPress }) => {
  return (
    <View style={styles.container}>
      <Button type="icon-only" icon="back-dark" onPress={onPress} />
      <Text style={styles.text}>{title}</Text>
      <Gap width={24} />
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    color: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white
  },
  text: {
    textAlign: 'center',
    flex: 1,
    fontFamily: fonts.primary[600],
    fontSize: 20,
    color: colors.text.primary
  }
})
