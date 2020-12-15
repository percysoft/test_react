import React from 'react';
import Slider from '@material-ui/core/Slider';
import { withStyles } from '@material-ui/core/styles';
import * as PropTypes from "prop-types";
import { TextStyle } from '../../styles';

const RangeSlider = withStyles({
  root: {
    color: '#8230E0',
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '1px solid #D8D8D8',
    marginTop: -8,
    marginLeft: -12,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);

export const RangeSliderComponent = (props) => {

  const { minQuotas , maxQuotas, setValuoQuota, valueQuota,disabled} = props;

  const onChange =  (e, value) => {
    setValuoQuota(value);
  }
  return(
    <div>
      <RangeSlider 
        key='slider-range'
        valueLabelDisplay="auto"
        defaultValue={valueQuota}
        value={valueQuota}
        min={minQuotas}
        max ={maxQuotas}
        onChange={onChange}
        disabled={disabled}

      />
      <div style={{display: 'flex', justifyContent:'space-between'}}>
        <TextStyle bold="800" size="25" color="#8230E0"> {`${valueQuota} cuotas`}</TextStyle>
        <TextStyle bold="800" size="25"> {`Máximo: ${maxQuotas}`}</TextStyle>
      </div>
    </div>
  )
}

RangeSliderComponent.propTypes = {
  minQuotas: PropTypes.number,
  maxQuotas: PropTypes.number,
};

RangeSliderComponent.defaultProps = {
  minQuotas: 1,
  maxQuotas: 50,
  valueQuota: 1,
};
