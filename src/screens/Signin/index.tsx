import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import {Formik} from 'formik';

import TextInput from '../../components/TextInput';

import useSignIn from './hooks/useSignIn';

export default function SignIn() {
  const {SignInSchema, goToDash, initialValues} = useSignIn();

  return (
    <Formik
      initialValues={{email: '', pass: ''}}
      onSubmit={(values, {setSubmitting}) => goToDash(values, setSubmitting)}
      validationSchema={SignInSchema}>
      {({values, handleChange, handleSubmit, isSubmitting, errors}) => (
        <View style={styles.container}>
          <Text style={styles.title}>FIAP</Text>
          <TextInput
            value={values.email}
            error={errors.email}
            onChangeText={handleChange('email')}
            placeholder="Digite seu e-mail"
            keyboardType="email-address"
          />
          <TextInput
            value={values.pass}
            error={errors.pass}
            onChangeText={handleChange('pass')}
            placeholder="Digite sua senha"
            secureTextEntry
          />
          <TouchableOpacity
            onPress={handleSubmit}
            activeOpacity={0.7}
            disabled={isSubmitting}
            style={styles.button}>
            <Text style={styles.buttonText}>
              {isSubmitting ? 'Carregando...' : 'Entrar'}
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </Formik>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ed145b',
  },
  title: {
    color: '#FFF',
    fontSize: 42,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  button: {
    backgroundColor: '#FFFFFF',
    padding: 10,
    width: Dimensions.get('screen').width - 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  buttonText: {
    color: '#be0e49',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
