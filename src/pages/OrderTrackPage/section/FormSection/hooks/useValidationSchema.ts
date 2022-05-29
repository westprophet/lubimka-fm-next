import * as Yup from 'yup';

export default function useValidationSchema() {
  return Yup.object().shape({
    message: Yup.string().max(500, 'Максимум 500 символов!'),
  });
}
