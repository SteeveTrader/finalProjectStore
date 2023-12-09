export const card = {
  m: '0 auto',
  p: '24px',
  maxWidth: '1083px',
  borderRadius: '16px',
  background: '#FFF',
  boxShadow: '7.572px 90.862px 45.431px 0px rgba(229, 229, 229, 0.70)',
};

export const btnDisable = {
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
  borderColor: 'disable',
  color: 'text.primary',
  transition: '.3s ease-in-out',
  '&:hover': {
    border: '2px solid',
    borderColor: 'disable',
    color: {
      mobile: 'text.primary',
      desktop: 'text.primaryLight',
    },
    bgcolor: {
      mobile: 'common.white',
      desktop: 'disable',
    },
  },
  '&:active': {
    color: {
      mobile: 'text.primaryLight',
      desktop: 'text.primary',
    },
    bgcolor: {
      mobile: 'disable',
      desktop: 'common.white',
    },
  },
};

export const infoWrapper = {
  display: 'flex',
  flexDirection: {
    mobile: 'column',
    lgTablet: 'row',
  },
  gap: '3%',
};

export const cardImg = {
  width: {
    mobile: '100%',
    lgTablet: 'calc((100% - 3%) / 2)',
  },
  borderRadius: '16px',
  objectFit: 'contain',
  objectPosition: 'left top',
};

export const formWrapper = {
  p: '0px',
  width: '100%',
};
