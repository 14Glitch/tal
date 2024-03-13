import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { loginNeo, loginMediquo } from "store/reducers/auth";
import { clearMessage } from "store/reducers/message";
// import { getProvedores } from 'service/neo';
import { validateUser } from 'service/mediquo'
import LoadingButton from '@mui/lab/LoadingButton';


// material-ui
import {
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  Alert,
  AlertTitle,
} from '@mui/material';

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';

// project import
import AnimateButton from 'components/@extended/AnimateButton';

// assets
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';


// ============================|| FIREBASE - LOGIN ||============================ //

const AuthLogin = ({ setAuth }) => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = React.useState(false);
  // const [list, setList] = React.useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data = await getProvedores();
  //     setList(data)
  //   }

  //   fetchData()
  // }, [])

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const checkUserMediquo = async (code) => {
    const { validate, usermediquo } = await validateUser(code);
    return { validate, usermediquo }
  };

  return (
    <>
      <Formik
        initialValues={{
          // operadora: "",
          email: '',
          password: '',
          submit: null
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string().max(255).required('usuário é requerido'),
          password: Yup.string().max(255).required('Senha é requerida'),
          // operadora: Yup.string().required("Uma operadora é requerida!"),
        })}
        onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {

          setLoading(true);

          const enableAccess = () => {
            setAuth(true);
            setStatus({ success: true });
            setSubmitting(true);
            navigate('/');
          }

          const userFailed = (error) => {
            setAuth(false);
            setStatus({ success: false });
            setErrors({ submit: error });
            setSubmitting(false);
            setLoading(false);
          }

          dispatch(loginNeo({ username: values.email, password: values.password }))
            .unwrap()
            .then(async (p) => {
              if (p.user?.access) {

                const hasUser = await checkUserMediquo(p.user?.subscriber_id || "")
                if (hasUser.validate) {

                  dispatch(loginMediquo(hasUser.usermediquo))
                    .unwrap()
                    .then(async () => {
                      enableAccess()
                    }).catch(() => {
                      setLoading(false);
                    });
                }
                else
                  navigate('/register');

              } else {
                userFailed(p.user?.error)
                setLoading(false);
              }
            })
            .catch((p) => {
              userFailed(p.user?.error)
              setLoading(false);
            });
        }}
      >
        {({ errors, handleBlur, handleChange, handleSubmit, touched, values }) => (
          <form noValidate onSubmit={handleSubmit}>
            <Grid container spacing={3} rowSpacing={2}>
              {/* <Grid item xs={12}>
                <Stack spacing={.5}>
                  <InputLabel htmlFor="operadora">Operadora</InputLabel>
                  <Select
                    displayEmpty inputProps={{ 'aria-label': 'Without label' }}
                    name="operadora"
                    value={values.operadora}
                    onChange={handleChange}
                    labelId="operadora-login-label"
                    error={Boolean(touched.operadora && errors.operadora)}
                    id="operadora-login">
                    <MenuItem value="">Selecione uma operadora</MenuItem>
                    {list.length > 0 && list.map(p => <MenuItem key={`key-${p.id}`} value={`${p.id}`}>{p.name}</MenuItem>)}
                  </Select>
                  {touched.operadora && errors.operadora && (
                    <FormHelperText error id="standard-weight-helper-text-operadora-login">
                      {errors.operadora}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid> */}


              <Grid item xs={12}>
                <Stack spacing={.5}>
                  <InputLabel htmlFor="email-login">Usuário</InputLabel>
                  <OutlinedInput
                    id="email-login"
                    type="text"
                    value={values.email}
                    name="email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="informe o usuário"
                    fullWidth
                    error={Boolean(touched.email && errors.email)}
                  />
                  {touched.email && errors.email && (
                    <FormHelperText error id="standard-weight-helper-text-email-login">
                      {errors.email}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <Stack spacing={.5}>
                  <InputLabel htmlFor="password-login">Senha</InputLabel>
                  <OutlinedInput
                    fullWidth
                    error={Boolean(touched.password && errors.password)}
                    id="-password-login"
                    type={showPassword ? 'text' : 'password'}
                    value={values.password}
                    name="password"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                          size="large"
                        >
                          {showPassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                        </IconButton>
                      </InputAdornment>
                    }
                    placeholder="senha"
                  />
                  {touched.password && errors.password && (
                    <FormHelperText error id="standard-weight-helper-text-password-login">
                      {errors.password}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>
              {errors.submit && (
                <Grid item xs={12}>
                  <Alert severity="error">
                    <AlertTitle>Atenção!</AlertTitle>
                    <strong>code: </strong>{errors.submit?.errorCode}<br />
                    <strong>description: </strong>{errors.submit?.details}
                  </Alert>
                </Grid>
              )}
              <Grid item xs={12} sx={{ mt: 1 }}>
                <AnimateButton>
                  <LoadingButton fullWidth size="large" type="submit" variant="contained" color="success" sx={{
                    '&:hover': { bgcolor: 'success.lighter' }
                  }} loading={loading}>
                    Login
                  </LoadingButton>
                </AnimateButton>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
    </>
  );
};

export default AuthLogin;
