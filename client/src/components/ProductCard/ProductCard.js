import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarIcon from '@mui/icons-material/Star';
import ColorChips from '../Chip/Chip';
import { stylesButtonCard, stylesButtonCardOutline, stylesSectionCard, stylesHeaderTopCard, stylesHeaderInCard, stylesContentCard, stylesActionsCard, stylesPriceCard, stylesRatingCard, stylesLabelCard, stylesMediaCard } from './styles';

const ProductCard = ({ _id }) => {
  const products = useSelector((state) => state.products.products);
  /* eslint-disable-next-line no-underscore-dangle */
  // const dish = products.find((item) => item._id === _id);
  // console.log(products);
  // console.log(dish1);

  const dish = {
    _id: '6507a306baee59670a047307',
    restaurant_name: 'Welcome Pizzeria',
    name: 'Margherita Pizza',
    description: 'Classic pizza with rich tomato sauce, melted cheese, and fresh basil leaves.',
    currentPrice: 12.99,
    isFavourite: false,
    isTranding: true,
    isSupreme: true,
    isHealthy: true,
    rating: 2.3,
    filterCategories: 'pizza',
    imageUrl: '../img/pizza/pizza_texas.png',
    enabled: true,
  };

  const {
    name,
    description,
    currentPrice,
    isTranding,
    rating,
    imageUrl,
    isSupreme,
    isHealthy,
  } = dish;

  return (
    <Container
      component="section"
      sx={{
        bgcolor: 'background.default',
        mt: { mobile: 5, tablet: 8 },
      }}
    >
      <Card
        sx={stylesSectionCard}
      >
        <CardHeader
          variant="h5"
          component="h1"
          title={name}
          sx={stylesHeaderTopCard}
        />
        <Stack
          sx={stylesContentCard}
        >
          <CardMedia
            component="img"
            image={imageUrl}
            alt="lobster"
            sx={stylesMediaCard}
          />
          <Stack direction="column" sx={{ alignSelf: 'flex-start', width: '100%' }}>
            <CardHeader
              variant="h5"
              component="h3"
              title={name}
              sx={stylesHeaderInCard}
            />
            <Stack
              sx={stylesLabelCard}
            >
              <Box sx={{ my: 2, width: { lgTablet: '350px' } }}>
                <ColorChips
                  isTrending={isTranding}
                  isSupreme={isSupreme}
                  isHealthy={isHealthy}
                />
              </Box>
              <Stack
                direction="row"
                sx={stylesRatingCard}
              >
                <Typography variant="body1" sx={{ whiteSpace: 'nowrap' }}>24min •</Typography>
                <Stack direction="row" spacing={1}>
                  {/* <RatingItem /> */}
                  <Rating
                    name="half-rating"
                    value={rating}
                    size="medium"
                    // precision={0.5}
                    // emptyIcon={<StarIcon size="inherit" />}
                    // icon={<StarIcon size="inherit" />}
                    // halfIcon={<StarHalfIcon size="inherit" />}
                    readOnly
                    sx={{ color: 'primary.main' }}
                  />
                  <Typography component="legend" variant="body1">{rating}</Typography>
                </Stack>
              </Stack>
            </Stack>
            <CardContent sx={{ p: 0, my: 3 }}>
              <Typography
                variant="description"
                component="p"
                sx={{ textAlign: 'justify' }}
              >
                {description}
              </Typography>
            </CardContent>
            <Box
              sx={stylesPriceCard}
            >
              <Typography
                variant="h3"
                sx={{ mb: 3, fontSize: { tablet: '22px', desktop: '30px' } }}
              >
                $
                {currentPrice}
              </Typography>
            </Box>
            <CardActions
              sx={stylesActionsCard}
            >
              <Button
                variant="outlined"
                sx={stylesButtonCardOutline}
              >
                Favourite
                <FavoriteBorderOutlinedIcon
                  fontSize="medium"
                  sx={{ ml: 1 }}
                />
              </Button>
              <Button
                variant="contained"
                sx={stylesButtonCard}
              >
                Add to card
                <AddBoxOutlinedIcon
                  fontSize="medium"
                  sx={{ ml: 1 }}
                />
              </Button>
            </CardActions>
          </Stack>
        </Stack>
      </Card>
    </Container>
  );
};

ProductCard.propTypes = {
  _id: PropTypes.string,
};

ProductCard.defaultProps = {
  _id: '6507a306baee59670a047307',
};

export default ProductCard;