import { Box, Select, styled, TextField } from "@mui/material";

export const SCFormSectionsContainer = styled(Box)(({ theme: { breakpoints } }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 20,
  [breakpoints.down('sm')]: {
    gap: 10
  }
}))

export const SCSection = styled('section')(({ theme: { breakpoints } }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  width: '100%',
  gap: 10,
  [breakpoints.down('lg')]: {
    gap: 5,
    flexDirection: 'column'
  }
}))

export const SCDisclaimerSection = styled('section')(({ theme: { breakpoints, palette } }) => ({
  padding: 10,
  margin: 20,
  border: '1px solid',
  borderRadius: 5,
  borderColor: palette.primary.main,
  [breakpoints.down('sm')]: {
    padding: 5
  }
}))

export const SCTextField = styled(TextField)(( { error } ) => ({
  '& input[type=number]': {
    MozAppearance: 'textfield',
    WebkitAppearance: 'none',
    appearance: 'textfield',
    border: error && '2px solid',
    borderRadius: error && 5,
    borderColor: error && 'red'
  },
  '& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button': {
    WebkitAppearance: 'none',
    margin: 0,
  }
}))

export const SCFieldGroup = styled('div')(({ theme: { breakpoints } }) => ({
  display: 'flex',
  flexDirection: 'column',
  marginInline: 10,
  gap: 10,
  [breakpoints.down('sm')]: {
    gap: 5
  }
}))

export const SCFormContainer = styled(Box)(({ theme: { breakpoints, palette } }) => ({
  padding: 50,
  width: '60%',
  border: `1px solid ${palette.primary.main}`,
  borderRadius: 10,
  boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.2)',
  [breakpoints.down('lg')]: {
    padding: 30,
    width: '80%',
  },
  [breakpoints.down('sm')]: {
    padding: 10,
    width: '90%'
  }
}))

export const SCSelect = styled(Select)(({ theme: { breakpoints } }) => ({
  minWidth: 150,
  [breakpoints.down('sm')]: {
    minWidth: 80
  }
}))