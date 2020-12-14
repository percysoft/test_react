import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import { TextStyle, Line } from '../../@designSystem/styles';
import { ContainerBorder } from './styles';
import { DetailQuota } from './components/detailQuota';
import { InputContainer } from '../../@designSystem/components/Input';
import { RangeSliderComponent } from '../../@designSystem/components/rangeSlider';
import { detailCampaigne, calculateQuota } from '../../mock';
import { LoaderComponent } from '../../@designSystem/components/loader';

export const SimulateYourQuota = () => {
  useEffect(() => {
    loadDataCampaigne();
  }, [])

  const [ dataCampaigne, setDataCampaigne] = useState({});
  const [valueQuota, setValuoQuota] = useState(1);
  const [amount, setAmount] = useState(0);
  const [quotaAmount, setQuotaAmount] = useState(0);

  useEffect(() => {
    
    QuotaMont()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [valueQuota, amount,quotaAmount])


  const [showLoader, setShowLoader]= useState(false);

  const loadDataCampaigne = () => {
    setShowLoader(true)
    detailCampaigne().then(data => {
      console.log(data,'datadata')
      setDataCampaigne(data);
      setShowLoader(false)
    }).catch(e => {
      setShowLoader(false)
    })
  }

  const QuotaMont = () => {
    calculateQuota(valueQuota,amount).then(data => {
      setQuotaAmount(data.monthly_amount)
    })
  }

  const { min_quota,max_quota,min_amount,max_amount} = dataCampaigne;
  const [ showError, setShowError] = useState(false);
  
  return (
    <ContainerSimulateQuota>
      {
        showLoader ? 
        <LoaderComponent/>:
        <>
          <TextStyle bold="bold" size="35">Simula tu cuota</TextStyle>
          <Line color="red" width="40px"/>
          <DetailQuota
            quotaAmount={quotaAmount}
            valueQuota={valueQuota} tea={dataCampaigne.tea} paymentDate={dataCampaigne.payment_date}/>
          <TextStyle bold="bold" size="20">Ingresa un monto</TextStyle>
          <InputContainer minAmount={min_amount} maxAmount={max_amount} amount={amount} setAmount={setAmount} showError={showError} setShowError={setShowError}/>
          <TextStyle bold="bold" size="20">Elige el número de cuotas</TextStyle>
          <RangeSliderComponent 
            minQuotas={min_quota} 
            maxQuotas={max_quota} 
            setValuoQuota={setValuoQuota}
            valueQuota={valueQuota}
            disabled={showError}
          />
        </>
      }
      
    </ContainerSimulateQuota>
  )
}

const ContainerSimulateQuota = styled(ContainerBorder)`
  width: 80%;
  display: block;
  margin: 10% auto;
  padding: 35px 50px;
  -webkit-box-shadow: 0px 2px 16px -5px rgba(153,153,153,1);
  -moz-box-shadow: 0px 2px 16px -5px rgba(153,153,153,1);
  box-shadow: 0px 2px 16px -5px rgba(153,153,153,1);
`;
