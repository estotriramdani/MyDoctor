import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, Header, Input, Gap } from '../../component'
import { colors } from '../../utils'

const Register = ({ navigation }) => {
  return (
    <View style={styles.page}>
      <Header title="Daftar Akun" onPress={() => navigation.goBack()} />
      <View style={styles.content}>
        <Gap height={24} />
        <Input label="Full Name" />
        <Gap height={24} />
        <Input label="Pekerjaan" />
        <Gap height={24} />
        <Input label="Email" />
        <Gap height={24} />
        <Input label="Password" />
        <Gap height={40} />
        <Button title="Continue" onPress={() => navigation.navigate('UploadPhoto')} />
      </View>
    </View>
  )
}

export default Register

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 40
  },
  page: {
    backgroundColor: colors.white,
    flex: 1
  }
})
