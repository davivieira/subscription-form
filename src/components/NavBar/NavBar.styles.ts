import { AppBar, styled, Typography } from "@mui/material";

export const SCTitle = styled(Typography)(({ theme: { palette } }) => ({
  flexGrow: 0.1,
  color: palette.text.primary,
  cursor: 'pointer',
  ':hover': {
    color: palette.background.paper,
  },
}));

export const SCAppBar = styled(AppBar)(({ theme: { palette, breakpoints } }) => ({
  background: `linear-gradient(to right, ${palette.primary.main}, ${palette.alternate.main})`,
  zIndex: 1000,
  height: 80,
  padding: 8,
  [breakpoints.down('sm')]: {
    top: 'auto',
    bottom: 0,
    left: 0,
    right: 0,
    position: 'fixed',
    width: '100vw'
  }
}));