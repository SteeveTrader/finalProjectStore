/* eslint-disable max-len */
import React, { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import useBreakpoint from '../../customHooks/useBreakpoint';
import RestaurantItem from '../../components/RestaurantItem/RestaurantItem';
import ProductCardItem from '../../components/ProductCardItem/ProductCardItem';
import ListItemAction from '../../components/ListItems/ListItemAction';
import ListItems from '../../components/ListItems/ListItem';
import { resetSearch, setInputSearchValue, setSearch } from '../../redux/slices/searchSlice';
import SectionSwipperFilterSearch from '../../components/SectionSwipper&Filter&Search/SectionSwipper&Filter&Search';
import { fetchSortedProducts } from '../../redux/slices/productsSlice';
import { productsPerPageMap } from '../../constants/bpMapConstants';
import { setFilterParams } from '../../redux/slices/filterSlice';

const MenuPage = () => {
  const dispatch = useDispatch();
  const itemsFromSearch = useSelector((state) => state.search.search);
  const itemsFromFilter = useSelector((state) => state.filter.filteredProducts);
  const keyFromSearch = useSelector((state) => state.search.key);
  const filterParams = useSelector((state) => state.filter.filterParams);
  const filteredProductsQuantity = useSelector((state) => state.filter.productsQuantity);
  const products = useSelector((state) => state.products.products);
  const location = useLocation();
  const topPartners = useSelector((state) => state.partners.topPartners, shallowEqual);
  const productsAnchor = useSelector((state) => state.scrollAnchor.scrollAnchor);
  const breakpoint = useBreakpoint();

  // useEffect(() => {
  //   const queryString = location.search;
  //   if (!queryString && !filterParams.sort) {
  //     dispatch(fetchSortedProducts(`?perPage=${productsPerPageMap[breakpoint]}&startPage=${filterParams.startPage}`));
  //   }
  // }, [breakpoint]);// eslint-disable-line

  console.log('location.search from menu: ', location.search);

  useEffect(() => {
    const queryString = location.search;
    if (!queryString && !filterParams.sort) {
      dispatch(fetchSortedProducts(`?perPage=${filterParams.perPage}&startPage=${filterParams.startPage}`));
    }
  }, [filterParams.perPage, filterParams.startPage]);// eslint-disable-line

  useEffect(() => {
    dispatch(setFilterParams({
      perPage: productsPerPageMap[breakpoint],
    }));
  }, [breakpoint, dispatch]);

  useEffect(() => {
    // dispatch(setSearch([]));
    // dispatch(setInputSearchValue(''));
    dispatch(resetSearch());
  }, [dispatch]);

  return (
    <>
      <SectionSwipperFilterSearch />

      {keyFromSearch === 'restaurant' && itemsFromSearch.length !== 0 && (
        <ListItems
          title={`Search Restaurant (${itemsFromSearch.length})`}
          items={itemsFromSearch}
          itemComponent={RestaurantItem}
          actions={null}
          type="partners"
          itemsFrom="search"
        />
      )}

      {keyFromSearch === 'food' && itemsFromSearch.length !== 0 ? (
        <ListItems
          title={`Search Results (${itemsFromSearch.length})`}
          items={itemsFromSearch}
          itemComponent={ProductCardItem}
          actions={null}
          type="food"
          pagination
          anchor={productsAnchor}
          itemsFrom="search"
        />
      ) : itemsFromFilter.length !== 0 ? (
        <ListItems
          title={`Filter Results (${filteredProductsQuantity})`}
          items={itemsFromFilter}
          itemComponent={ProductCardItem}
          actions={null}
          type="food"
          pagination
          sorting
          anchor={productsAnchor}
          itemsFrom="filter"
        />
      ) : (
        <ListItems
          title="All Dishes"
          items={products}
          itemComponent={ProductCardItem}
          actions={null}
          type="food"
          pagination
          sorting
          anchor={productsAnchor}
          itemsFrom="allDishes"
        />
      )}

      {topPartners.length > 0 && (
        <ListItems
          title="Our Top Restaurants"
          items={topPartners}
          itemComponent={RestaurantItem}
          actions={<ListItemAction type="partners" />}
          type="partners"
        />
      )}
    </>
  );
};

export default MenuPage;
