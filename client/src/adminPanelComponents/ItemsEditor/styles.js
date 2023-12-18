import { outlinedBtnStyles } from '../../muiTheme/buttonsStyles';

export const card = {
  m: '0 auto',
  p: '24px 24px 50px 24px',
  maxWidth: '1083px',
  borderRadius: '16px',
  boxShadow: '7.572px 90.862px 45.431px 0px rgba(229, 229, 229, 0.70)',
};

export const topBtnsWrapper = {
  display: 'flex',
  justifyContent: 'flex-end',
  gap: {
    mobile: '6%',
    lgTablet: '5%',
    desktop: '4%',
  },
  p: '0',
  mb: '23px',
};

export const toggleDisableBtn = {
  background: 'common.white',
  p: '6px 16px',
  minWidth: {
    mobile: '100px',
    lgTablet: '120px',
  },
  fontSize: {
    mobile: '14px',
    lgTablet: '16px',
    desktop: '18px',
  },
  borderRadius: '12px',
  border: '2px solid',
  color: 'text.primary',
  transition: 'border .3s ease, border-color .3s ease, color .3s ease, background-color .3s ease',
};

export const disableBtn = {
  borderColor: 'disable',
  '&:hover': {
    border: '2px solid',
    borderColor: 'disable',
    color: { desktop: 'text.primaryLight' },
    bgcolor: { mobile: 'transparent', desktop: 'disable' },
  },
  '&:active': {
    color: 'text.primaryLight',
    bgcolor: 'disable',
  },
};

export const activateBtn = {
  borderColor: 'activate',
  '&:hover': {
    border: '2px solid',
    borderColor: 'activate',
    color: {
      mobile: 'text.primary',
      desktop: 'text.primaryLight',
    },
    bgcolor: {
      mobile: 'common.white',
      desktop: 'activate',
    },
  },
  '&:active': {
    color: 'text.primaryLight',
    bgcolor: 'activate',
  },
};

export const showDishesBtn = {
  ...outlinedBtnStyles,
  p: '10px 16px',
  width: '100%',
  maxWidth: { mobile: '150px', tablet: '180px', desktop: '200px' },
};
