import { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

// material-ui
import {
  FormHelperText,
  Grid,
  Chip,
  Link,
  InputLabel,
  OutlinedInput,
  Stack,
  Typography,
  Select,
  MenuItem,
} from '@mui/material';

import { useDispatch } from "react-redux";

import { register } from "store/reducers/auth";

import LoadingButton from '@mui/lab/LoadingButton';
import AlertMdl from 'components/modal';
import TextMaskCustom from 'components/textmask';
import TextMaskBirthday from './components/maskbirthday';

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';

// project import
//import FirebaseSocial from './FirebaseSocial';
import AnimateButton from 'components/@extended/AnimateButton';
import { strengthColor, strengthIndicator } from 'utils/password-strength';

// assets
import KeyIcon from '@mui/icons-material/Key';

// ============================|| FIREBASE - REGISTER ||============================ //

const AuthRegister = ({ code }) => {

  const dispatch = useDispatch();

  const [setLevel] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [setNum] = useState("");

  const changePassword = (value) => {
    const temp = strengthIndicator(value);
    setLevel(strengthColor(temp));
  };

  const getNumber = () => Math.floor(Math.random() * 11)

  const generatorRandomNumber = () => {
    return [getNumber(), getNumber(), getNumber(), getNumber()].join("")
  }

  useEffect(() => {
    changePassword('');
    const nums = generatorRandomNumber()
    setNum(nums)
  }, []);

  const simulateCad = () => {
    window.setTimeout(() => {
      setLoading(false)
      setIsOpen(true);
    }, 1e3 * 3)
  }

  return (
    <>
      <Formik
        initialValues={{
          firstname: '',
          lastname: '',
          email: '',
          sexo: '',
          telefone: '',
          nascimento: '',
          submit: null
        }}
        validationSchema={Yup.object().shape({
          firstname: Yup.string().max(255).required('Nome é requerido'),
          lastname: Yup.string().max(255).required('Sobrenome é requerido'),
          telefone: Yup.string().required('Telefone é requerido'),
          email: Yup.string().email('Digite um email válido').max(255).required('Email é requerido')
        })}
        onSubmit={async (values, { setStatus, setSubmitting }) => {

          setLoading(true)

          let formatBirth = values.nascimento.split("/")
          const birthDate = `${formatBirth[2]}-${formatBirth[1]}-${formatBirth[0]}`

          const newUser = {
            "patients": [
              {
                "code": `${code}`,
                "first_name": `${values.firstname}`,
                "last_name": `${values.lastname}`,
                "gender": `${values.sexo}`,
                "plan": "premium",
                "birth_date": `${birthDate}`,
                "email": `${values.email}`,
                "phone": `${values.telefone}`
              }
            ]
          }

          dispatch(register(newUser))
            .unwrap()
            .then(async () => {

              simulateCad();
              setStatus({ success: false });
              setSubmitting(false);
             
            })
            .catch(() => {
              setLoading(false);
            });
        }}
      >
        {({ errors, handleBlur, handleChange, handleSubmit, touched, values }) => (

          <form noValidate onSubmit={handleSubmit}>

            <Grid container spacing={3}>
              <Grid item xs={12} md={12}>
                <Chip
                  variant="combined"
                  size="small"
                  avatar={<KeyIcon />}
                  label={`Licença: ****-****-****-${code.substring(code.length - 4)}`}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="firstname-signup">Nome*</InputLabel>
                  <OutlinedInput
                    id="firstname-login"
                    type="firstname"
                    value={values.firstname}
                    name="firstname"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    fullWidth
                    error={Boolean(touched.firstname && errors.firstname)}
                  />
                  {touched.firstname && errors.firstname && (
                    <FormHelperText error id="helper-text-firstname-signup">
                      {errors.firstname}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>
              <Grid item xs={12} md={6}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="lastname-signup">Sobrenome*</InputLabel>
                  <OutlinedInput
                    fullWidth
                    error={Boolean(touched.lastname && errors.lastname)}
                    id="lastname-signup"
                    type="lastname"
                    value={values.lastname}
                    name="lastname"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    inputProps={{}}
                  />
                  {touched.lastname && errors.lastname && (
                    <FormHelperText error id="helper-text-lastname-signup">
                      {errors.lastname}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>

              <Grid item xs={12} md={6}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="operadora">Sexo</InputLabel>
                  <Select
                    displayEmpty inputProps={{ 'aria-label': 'Without label' }}
                    name="sexo"
                    value={values.sexo}
                    onChange={handleChange}
                    labelId="sexo-login-label"
                    error={Boolean(touched.sexo && errors.sexo)}
                    id="sexo-login">
                    <MenuItem value="">Sel. um sexo</MenuItem>
                    <MenuItem value={"male"}>Masculino</MenuItem>
                    <MenuItem value={"female"}>Feminino</MenuItem>
                  </Select>
                  {touched.sexo && errors.sexo && (
                    <FormHelperText error id="standard-weight-helper-text-sexo-login">
                      {errors.sexo}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>
              <Grid item xs={12} md={6}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="nascimento-signup">Data nascimento</InputLabel>
                  <OutlinedInput
                    fullWidth
                    error={Boolean(touched.nascimento && errors.nascimento)}
                    id="nascimento-signup"
                    type="nascimento"
                    value={values.nascimento}
                    name="nascimento"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    inputComponent={TextMaskBirthday}
                  />
                  {touched.nascimento && errors.nascimento && (
                    <FormHelperText error id="helper-text-nascimento-signup">
                      {errors.nascimento}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>
              <Grid item xs={12} md={6}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="email-signup">Email*</InputLabel>
                  <OutlinedInput
                    fullWidth
                    error={Boolean(touched.email && errors.email)}
                    id="email-login"
                    type="email"
                    value={values.email}
                    name="email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    inputProps={{}}
                  />
                  {touched.email && errors.email && (
                    <FormHelperText error id="helper-text-email-signup">
                      {errors.email}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>
              <Grid item xs={12} md={6}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="telefone-signup">Telefone*</InputLabel>

                  <OutlinedInput
                    id="telefone-login"
                    error={Boolean(touched.telefone && errors.telefone)}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    name="telefone"
                    value={values.telefone}
                    inputComponent={TextMaskCustom}
                  />

                  {touched.telefone && errors.telefone && (
                    <FormHelperText error id="helper-text-telefone-signup">
                      {errors.telefone}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body2">
                  Ao se inscrever, você concorda com nossos &nbsp;
                  <Link variant="subtitle2" component={RouterLink} to="#">
                    Termos de Serviço
                  </Link>
                  &nbsp; e &nbsp;
                  <Link variant="subtitle2" component={RouterLink} to="#">
                    Política de Privacidade
                  </Link>
                </Typography>
              </Grid>
              {errors.submit && (
                <Grid item xs={12}>
                  <FormHelperText error>{errors.submit}</FormHelperText>
                </Grid>
              )}
              <Grid item xs={12}>
                <AnimateButton>
                  <LoadingButton fullWidth size="large" type="submit" variant="contained" color="primary" loading={loading}>
                    Criar conta
                  </LoadingButton>
                </AnimateButton>

              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
      <AlertMdl {...{ isOpen, setIsOpen }} />
    </>
  );
};

export default AuthRegister;
