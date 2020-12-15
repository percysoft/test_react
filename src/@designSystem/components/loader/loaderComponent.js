import React from 'react';
import * as PropTypes from 'prop-types';
import { COLORS } from '../../colors'
import { ContainerLoader } from './styled';

export const LoaderComponent = (props) => {
  const {
    fill,
    height,
    width,
  } = props;

  return (
    <ContainerLoader
      fill={fill}
      height={height}
      width={width}
    >
      <div></div>
      <div></div>
      <div></div>
    </ContainerLoader>
  );
}

LoaderComponent.propTypes =  {
  fill: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
}

LoaderComponent.defaultProps =  {
  fill: COLORS.BLACK,
  height: '14px',
  width: '14px',
}
