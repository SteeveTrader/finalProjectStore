import React, { useState, useEffect, useRef } from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import PropTypes from 'prop-types';

const CustomAlert = ({ type, content, handleCloseAlert }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
    setTimeout(() => {
      setVisible(false);
    }, 3000);
  }, [handleCloseAlert]);

  const alertStyle = {
    width: '40%',
    position: 'fixed',
    bottom: '50px',
    left: '50px',
    zIndex: '3000',
    transition: 'opacity 1s ease-in-out',
    opacity: visible ? 1 : 0,
  };

  return (
    <Stack sx={alertStyle} spacing={2}>
      <Alert
        onClose={handleCloseAlert}
        severity={type}
      >
        <AlertTitle>{type}</AlertTitle>
        {content}
      </Alert>
    </Stack>
  );
};

CustomAlert.propTypes = {
  type: PropTypes.string,
  content: PropTypes.string,
  handleCloseAlert: PropTypes.func,
  // alert: PropTypes.bool,
};

CustomAlert.defaultProps = {
  type: 'success',
  content: 'This is a Alert',
  handleCloseAlert: () => {},
  // alert: false,
};

export default CustomAlert;