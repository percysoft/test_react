
import { calculateAmountTea } from './utils';

export const  detailCampaigne = (success= true) => {
  return new Promise( (resolve, reject) => {
    if(success) {
      setTimeout(() => {
        resolve({
          "campaign_name": "InstaCash",
          "min_quota": 1,
          "max_quota": 48,
          "max_amount": 19600,
          "min_amount": 1500,
          "tea": 26.5612,
          "payment_date": "2019-12-26T16:30:04.591Z",
          "currency": "PEN"
      })
      }, 1500)
    } else { 
      reject('Error Service')
    }
})
}


export const  calculateQuota = (quota, amount, success= true) => {
  return new Promise( (resolve, reject) => {
    if(success) {
      resolve({
        "monthly_amount": calculateAmountTea(amount, quota)
      })
    } else {
      reject('Error Service')
    }
})
}
