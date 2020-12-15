import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { ContainerBorder } from '../../styles';
import { TextStyle } from '../../../../@designSystem/styles';


export const ItemDetail = (props) => {
  const { title, amount, showBorder } = props;
  return(
    <ItemDetailQuota showBorder={showBorder}>
      <TextStyle bold="300" size="20" > {title}</TextStyle>
      <TextStyle bold="bold" size="25" > {amount}</TextStyle>
    </ItemDetailQuota>
  )
}

const  ItemDetailQuota = styled.div`
  border-right: ${props => props.showBorder ?  '3px dotted black' : "none "};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 33.33%;
  @media only screen and (max-width: 600px) {
    width: 100% !important;
    border-right: none !important;
  }
`;

export const DetailQuota = (props) => {
  const { valueQuota, tea, paymentDate, quotaAmount} = props;
  return (
    <ContainerBorder padding="25px">
      <TextStyle bold="300" size="25" textAlign="center">Tu cuota mensual será</TextStyle>
      <TextStyle bold="800" size="35" textAlign="center">{`S/ ${quotaAmount && Number(quotaAmount.toFixed(2))}`}</TextStyle>
      <ContainerItemDetailQuota>
        <ItemDetail title="Cuotas" amount={valueQuota} showBorder={true}/>
        <ItemDetail title="TEA" amount={`${tea && tea.toFixed(2)}%`} showBorder={true}/>
        <ItemDetail title="Pago 1 Cuota" amount={paymentDate && moment(paymentDate).format("d MMM")} showBorder={false}/>
      </ContainerItemDetailQuota>
    </ContainerBorder>
  )
}

const  ContainerItemDetailQuota = styled.div`
  display: flex;
  justify-content: space-around;
  @media only screen and (max-width: 600px) {
    flex-direction: column !important;
  }
`;

