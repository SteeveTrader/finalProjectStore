import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { PropTypes } from 'prop-types';
import StarIcon from '../SvgComponents/StarIcon';

const RatingItem = ({ ratingValue }) => {
  const [value, setValue] = React.useState(3);

  return (
    <Box
      sx={{
        '& > legend': { mt: -1 },
      }}
    >
      <Rating
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        // precision={0.5}
        size="large"
        icon={<StarIcon fill="#6C5FBC" />}
        emptyIcon={<StarIcon fill="#FFFFFF" />}
        // readOnly
      />
    </Box>
  );
};

RatingItem.propTypes = {
  ratingValue: PropTypes.number,
};

RatingItem.defaultProps = {
  ratingValue: null,
};

export default RatingItem;
