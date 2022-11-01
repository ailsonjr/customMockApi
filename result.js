const custom_mock_apis = require('./custom_mock_api')

const params = {
  input: '42518511024'
}

custom_mock_apis(params).then(result => console.log(JSON.stringify(result, null, 2)))