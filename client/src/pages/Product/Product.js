import React from 'react';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { Container, Box, useMediaQuery } from '@mui/material';
import ProductCard from '../../components/ProductCard/ProductCard';
import QuestionsList from '../../components/QuestionsList/QuestionsList';
import ListItems from '../../components/ListItems/ListItem';
import ProductCardItem from '../../components/ProductCardItem/ProductCardItem';
import Skeleton from '../../components/Skeleton/Skeleton';
import useGetAPI from '../../customHooks/useGetAPI';
import dishesWraper from '../Partners/styles';

const ProductPage = () => {
  const topProducts = useSelector((state) => state.products.topProducts);
  const loadingTopProducts = useSelector((state) => state.products.loading);
  const { itemNo } = useParams();
  const [dish, loading, error] = useGetAPI(`/products/${itemNo}`);

  const isLgTablet = useMediaQuery('(min-width: 690px)');
  const isDesktop = useMediaQuery('(min-width: 993px)');

  return (
    <Box>
      {loading ? (
        <Container
          component="section"
          sx={{
            bgcolor: 'background.default',
            mt: { mobile: 5, tablet: 8 },
            mb: { mobile: '60px', tablet: '100px' },
          }}
        >
          <Skeleton skeletonType="oneProductPage" />
        </Container>
      ) : (
        <ProductCard dish={dish} />
      )}
      {loadingTopProducts ? (
        <Container sx={{ mb: 13 }}>
          <Box sx={dishesWraper}>
            <Box sx={{ width: '100%' }}>
              <Skeleton skeletonType="product" />
            </Box>
            <Box sx={{ width: '100%' }}>
              <Skeleton skeletonType="product" />
            </Box>
            <Box sx={{ width: '100%' }}>
              <Skeleton skeletonType="product" />
            </Box>
            {!isLgTablet && (
              <Box sx={{ width: '100%' }}>
                <Skeleton skeletonType="product" />
              </Box>
            )}
            {isDesktop && (
              <>
                <Box sx={{ width: '100%' }}>
                  <Skeleton skeletonType="product" />
                </Box>
                <Box sx={{ width: '100%' }}>
                  <Skeleton skeletonType="product" />
                </Box>
              </>
            )}
          </Box>
        </Container>
      ) : (
        <ListItems
          title="Popular"
          items={topProducts}
          itemComponent={ProductCardItem}
          actions={null}
        />
      )}
      <QuestionsList />
    </Box>
  );
};

export default ProductPage;
