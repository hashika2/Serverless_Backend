const Auth = require('./Auth');

module.exports.createAuth = async (event,context) => {
  return await Auth(event);

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
