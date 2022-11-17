const custom_mock_apis = require('./custom_mock_api');
const custom_cpfs_mockados = require('./custom_cpfs_mockados');

const responses = custom_mock_apis('13170849697');

const params = {
  input: '13170849697',
  responses
}

console.log(params);

custom_cpfs_mockados(params).then(result => {
  console.log(result);
});
