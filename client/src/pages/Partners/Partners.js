import React from 'react';
import Box from '@mui/material/Box';
import { shallowEqual, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import PartnersCard from '../../components/PartnersCard/PartnersCard';
import QuestionsList from '../../components/QuestionsList/QuestionsList';
import ListItems from '../../components/ListItems/ListItem';
import { fixedDecodeURIComponent } from '../../utils/uriEncodeHelpers';
import ProductCardItem from '../../components/ProductCardItem/ProductCardItem';
import getChangedString from '../../utils/getChangedString';

const PartnersPage = () => {
  const { partnersName } = useParams();

  const products = useSelector((state) => state.products.products, shallowEqual);
  const nameOfPartners = fixedDecodeURIComponent(partnersName);

  const allProductsOfRest = products.filter((item) => {
    return item.restaurant_name.toLowerCase() === nameOfPartners;
  });
  console.log(allProductsOfRest);

  const title = getChangedString(nameOfPartners);

  return (
    <Box>
      <PartnersCard partnersName={partnersName} />
      <ListItems title={`${title} Dishes`} items={allProductsOfRest} itemComponent={ProductCardItem} actions={null} />
      <QuestionsList />
    </Box>
  );
};

export default PartnersPage;