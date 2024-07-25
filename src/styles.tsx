import { Box, styled } from "@mui/material";

export const SCContainer = styled(Box)(({ theme: { breakpoints } }) => ({
  padding: 50,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  [breakpoints.down('lg')]: {
    padding: 30
  },
  [breakpoints.down('sm')]: {
    padding: 10
  }
}))

export const SCErrorMessage = styled('div')(({ theme: { palette } }) => ({
  color: palette.background.default,
  backgroundColor: palette.error.main,
  fontSize: '0.875rem',
  padding: 10,
  width: 'fit-content',
  borderRadius: 5
}))