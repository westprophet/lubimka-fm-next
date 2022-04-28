import * as Yup from 'yup';

//Получаем схему валиадции полей для формика
export default function useValidationSchema() {
  return Yup.object().shape({
    name: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Это поле обязательно'),
    email: Yup.string().email('Invalid email').required('Это поле обязательно'),
    phone: Yup.string(),
    message: Yup.string().required('Это поле обязательно'),
  });
}
