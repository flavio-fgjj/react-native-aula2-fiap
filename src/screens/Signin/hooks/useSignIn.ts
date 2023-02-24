import {useNavigation} from '@react-navigation/native';
import * as Yup from 'yup';
import {Keyboard} from 'react-native';

//import {StackProps} from '../../../routes';

export default function useSignIn() {
  //const navigation = useNavigation<StackProps>();

  const initialValues = {email: '', pass: ''};

  const SignInSchema = Yup.object().shape({
    email: Yup.string()
      .email('Formato de e-mail inválido')
      .required('Campo obrigatório'),
    pass: Yup.string().required('Required'),
  });

  const goToDash = (params: any, setSubmitting: (param: boolean) => void) => {
    Keyboard.dismiss();
    setTimeout(() => {
      setSubmitting(false);
      console.log(params);
    }, 5000);
    //navigation.replace('Dashboard');
  };

  return {
    initialValues,
    SignInSchema,
    goToDash,
  };
}
