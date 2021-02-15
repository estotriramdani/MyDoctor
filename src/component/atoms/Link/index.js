import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../../../utils/colors'
import { fonts } from '../../../utils/fonts'

const Link = ({ label, size, align }) => {
  return (
    <View>
      <Text style={styles.text(size, align)}>{label}</Text>
    </View>
  )
}

export default Link

const styles = StyleSheet.create({
  text: (size, align) => (
    {
      fontSize: size,
      color: colors.text.secondary,
      fontFamily: fonts.primary[400],
      textDecorationLine: 'underline',
      textAlign: align,
    }
  )
})
