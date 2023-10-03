import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
import PropTypes from 'prop-types';

const RatingItem = ({ ratingValue }) => {
  const [value, setValue] = useState(ratingValue);

  return (
    <Box>
      <Rating
        sx={{
          width: {
            mobile: 140,
            desktop: 150,
          },
          marginLeft: '-4px',
        }}
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        // precision={0.5}
        size="small"
        icon={<StarRateRoundedIcon color="primary" />}
        emptyIcon={<StarRateRoundedIcon />}
        readOnly
      />
    </Box>
  );
};

RatingItem.propTypes = {
  ratingValue: PropTypes.number,
};

RatingItem.defaultProps = {
  ratingValue: 3,
};

export default RatingItem;
