import {useNavigation} from '@react-navigation/native';
import * as Yup from 'yup';

// Types
import type {MainNavigationProp} from '../../../routes/stack/types';

export default function useSignIn() {
  const navigation = useNavigation<MainNavigationProp>();

  const initialValues = {email: '', pass: ''};

  const submit = (
    values: typeof initialValues,
    setSubmitting: (isSubmitting: boolean) => void,
  ) => {
    setTimeout(() => {
      setSubmitting(false);
      navigation.replace('TabRouter');
    }, 5000);
  };

  const goToSignUp = () => {
    navigation.push('SignUp');
  };

  const SignInSchema = Yup.object().shape({
    email: Yup.string()
      .email('Por favor insira um e-mail válido')
      .required('Este campo é obrigatório'),
    pass: Yup.string().required('Este campo é obrigatório'),
  });

  return {
    SignInSchema,
    submit,
    goToSignUp,
    initialValues,
  };
}
