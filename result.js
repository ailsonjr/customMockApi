const custom_mock_apis = require('./custom_mock_api');
const custom_cpfs_mockados = require('./custom_cpfs_mockados');

custom_mock_apis().then(result => {
  custom_cpfs_mockados({ input: '13170849697', responses: result }).then(result => {
    console.log(JSON.stringify(result, null, 2));
  }).catch(e => {
    console.log(e);
  });
}).catch(e => {
  console.log(e);
})

