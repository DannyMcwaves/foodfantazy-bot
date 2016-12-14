import Twit from 'twit'

const T = new Twit({
  consumer_key:         'kZep1DqxjfXfZQ3GSPI2c61pP',
  consumer_secret:      'A2BmbPhnTa70MPGaknYnLcBhI4JEhCa5CDcFyLch9h252cFxa1',
  access_token:         '3254198412-SMZhQgPZi8a4USeEkAR2NO9DICRi8Tjn1Ve9yNA',
  access_token_secret:  '1PK9BuWRQdYUUyX75pFqMacnTkN3xv7tSBpX7DS5iPPMT',
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
})

export default T
