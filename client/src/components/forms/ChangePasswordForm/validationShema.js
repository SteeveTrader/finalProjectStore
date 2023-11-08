import { object, string } from 'yup';

const validationSchema = object({
  password: string()
    .required('This field is required')
    .min(8, 'Password is too short - should be 8 chars minimum'),
  passwordConfirmation: string()
    .required('This field is required')
    .min(8, 'The password is incorrect, please try again'),
});

export default validationSchema;