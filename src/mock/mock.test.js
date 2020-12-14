import { detailCampaigne , calculateQuota} from './index';
import { calculateAmountTea } from './utils';

describe(' Test Promises detail campaigne', () => {
  test('should return json detail async' , (done) => {
    let dataTest = {
      "campaign_name": "InstaCash",
      "min_quota": 1,
      "max_quota": 48,
      "max_amount": 19600,
      "min_amount": 1500,
      "tea": 26.5612,
      "payment_date": "2019-12-26T16:30:04.591Z",
      "currency": "PEN"
    }
    detailCampaigne().then(data => {
      expect(data).toEqual(dataTest)
      done();
    })
  })
  test('should return error' , (done) => {
    let message_error = "Error Service"
    detailCampaigne(false).catch(error => {
      expect(error).toBe(message_error)
      done();
    })
  })
})

describe(' Test Promises calculate Quota', () => {
  test('should return json detail async' , (done) => {
    let quota = 3;
    let amount = 1200;

    let dataTest = {
      "monthly_amount": calculateAmountTea(amount, quota)
    }
    calculateQuota(quota,amount ).then(data => {
      expect(data).toEqual(dataTest)
      done();
    })
  })
  test('should return error' , (done) => {
    let message_error = "Error Service"
    detailCampaigne(false).catch(error => {
      expect(error).toBe(message_error)
      done();
    })
  })
})


describe(' Test Promises TEA', () => {
  test('should return json detail async' , (done) => {
    let quota = 3;
    let amount = 1200;

    let dataTest = {
      "monthly_amount":calculateAmountTea(amount, quota)
    }
    calculateQuota(quota,amount ).then(data => {
      expect(data).toEqual(dataTest)
      done();
    })
  })
})