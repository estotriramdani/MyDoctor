import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ILLogo } from '../../assets'
import { Input, Button, Link, Gap } from '../../component'
import { colors, fonts } from '../../utils'


const Login = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View>
        <ILLogo />
        <Text style={styles.title}>Masuk dan Mulai Berkonsultasi</Text>
        <Input label="Email Address" />
        <Gap height={20} />
        <Input label="Password" />
        <Gap height={10} />
        <Link label="Forgot my password" size={12} />
        <Gap height={30} />
        <Button title="Sign In" onPress={() => navigation.replace('MainApp')} />
        <Gap height={30} />
        <Link label="Create New Account" size={16} align="center" />
      </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    padding: 40,
    flex: 1
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 40,
    marginBottom: 40,
    maxWidth: 153
  }
})
