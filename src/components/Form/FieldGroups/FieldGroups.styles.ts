import { styled, TextField } from "@mui/material";

export const SCFieldGroupContainer = styled('div')(({ theme: { breakpoints } }) => ({
  display: 'flex',
  flexDirection: 'row',
  gap: 10,
  [breakpoints.down('sm')]: {
    gap: 5
  }
}))

export const SCPrefixField = styled(TextField)(({ error }) => ({
  width: 60,
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
    },
}))
