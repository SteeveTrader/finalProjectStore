import React from 'react';
import { useSelector } from 'react-redux';
import { Formik, Form } from 'formik';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import EmailIcon from '@mui/icons-material/Email';
import validationSchema from './validationSchema';
import Input from '../../inputs/Input/Input';
import { flexcenter, mainTitle, legend, inputsWrapper, signInBtn } from './styles';

const LoginForm = () => {
  const authError = useSelector((state) => state.error.authorization);

  const initialValues = {
    email: '',
    password: '',
  };

  const handleSubmit = () => {
    console.log('hello');
  };

  return (
    <Box
      component="section"
      sx={{
        pt: 0,
        ...flexcenter,
        width: {
          mobile: '100%',
          tablet: 350,
          desktop: 526,
        },
        bgcolor: 'common.white',
        p: {
          desktop: 2,
        },
      }}
    >
      <Typography
        variant="h2"
        component="h1"
        sx={mainTitle}
      >
        Forget Password
      </Typography>
      <Typography
        variant="body1"
        sx={legend}
      >
        Enter Your Mail To Reset
      </Typography>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ isValid }) => (
          <Form>
            <Box
              sx={flexcenter}
            >
              <Box
                sx={{
                  ...flexcenter,
                  ...inputsWrapper,
                }}
              >
                <Input
                  error={authError.email}
                  type="email"
                  name="email"
                  id="loginEmail"
                  placeholder="Enter your e-mail"
                  label="E-mail"
                  icon={<EmailIcon />}
                />
              </Box>
              {/* <Link
                component={NavLink}
                to="/forget-password"
                underline="none"
                sx={forgetPassword}
              >
                Forget Password ?
              </Link> */}
              <Button
                disableRipple
                variant="contained"
                sx={signInBtn}
                type="submit"
                disabled={!isValid}
              >
                Verify
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default LoginForm;
