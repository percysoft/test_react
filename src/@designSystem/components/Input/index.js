import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import { TextStyle } from '../../styles';
import NumberFormat from "react-number-format";
import * as PropTypes from "prop-types";
import { COLORS } from '../../colors';

const  NumberFormatCustom = (props) => {
  const { inputRef, onChange, ...other } = props;
  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={values => {
        onChange({
          target: {
            name: props.name,
            value: values.value
          }
        });
      }}
      allowNegative={false}
      decimalScale={2}
      fixedDecimalScale={true}
    />
  );
}
export const InputContainer = (props) => {
  const { minAmount,maxAmount, setAmount, amount, setShowError,showError} = props;
 

  const handleChange = (e) => {
    let valueInput = e.target.value;
    console.log(valueInput,'valueInput')
    if(valueInput < minAmount ||  valueInput> maxAmount) {
      setShowError(true)
    } else {
      setShowError(false)
    }
    setAmount(valueInput)
  }
  return(
    <div>
       <TextField
        inputProps={{ id: "content-input","data-testid": "content-input" }}
        fullWidth={true}
        value={amount}
        onChange={handleChange}
        name="numberformat"
        id="formatted-numberformat-input"
        InputProps={{
          inputComponent: NumberFormatCustom
        }}
      />
      {showError && <TextStyle bold="300" size="15" color={COLORS.RED}>ERROR EN EL MONTO</TextStyle>}
       <TextStyle bold="300" size="15">{`Mínimo S/${minAmount} - Máximo S/ ${maxAmount}`}</TextStyle>
    </div>
  )
}

InputContainer.propTypes = {
  minAmount: PropTypes.number,
  maxAmount: PropTypes.number,
  setAmount: PropTypes.any,
  amount: PropTypes.number,
};

InputContainer.defaultProps = {
  minAmount: 1,
  maxAmount: 50,
  amount: 100
};
