// ** React Imports
import { Fragment } from 'react'

// ** MUI Components
import useMediaQuery from '@mui/material/useMediaQuery'
import { styled, useTheme } from '@mui/material/styles'

// assets
import personTal from 'assets/images/bg/person-login.png';
import mask from 'assets/images/bg/bg-login.png';

// Styled Components
const MaskImg = styled('img')(() => ({
  top: 0,
  zIndex: -2,
  width: '100%',
  height: '100%',
  position: 'absolute'
}))

const Person = styled('img')(() => ({
  left: 0,
  bottom: 0,
  width: '50%',
  position: 'absolute',
  zIndex: -1,
}))

const AuthBackground = (props) => {
  // ** Props
  const { image1 } = props

  // ** Hook
  const theme = useTheme()

  // ** Vars
  const hidden = useMediaQuery(theme.breakpoints.down('md'))

  if (!hidden) {
    return (
      <Fragment>
        {image1 || <Person alt='Person - Tal' src={personTal} />}
        <MaskImg alt='mask' src={mask} />
      </Fragment>
    )
  } else {
    return (
      <Fragment>
        <MaskImg alt='mask' src={mask} />
      </Fragment>
    )
  }
}

export default AuthBackground

