import React from 'react';
import PropTypes from 'prop-types';
import { ButtonLoadMore } from './BtnOnLoadMore.styled';

export const BtnOnLoadMore = ({ onLoadMore }) => {
  return (
    <ButtonLoadMore type="button" onClick={onLoadMore}>
      Load more
    </ButtonLoadMore>
  );
};

BtnOnLoadMore.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
};