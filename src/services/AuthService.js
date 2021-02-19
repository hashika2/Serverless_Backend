const getAllData = require("../shared/database/repositories/PersonsRepo");
const AWS = require("aws-sdk");

const AuthService = async (event) => {
  try {
    const user = await getAllData();
    return {
      body: JSON.stringify(
        {
          message: "Go Serverless v1.0! Your function executed successfully!",
          name: user,
        },
        null,
        2
      ),
    };
  } catch (error) {
    return error;
  }
};

const setStepFunService = async (event) => {
  return await startStateMachine(
    "arn:aws:states:us-east-1:551044627845:stateMachine:HelloWorld",
    "String"
  );
};

const startStateMachine = (stateMachineArn, messageString) =>
  new Promise((resolve, reject) => {
    const stepFunction = new AWS.StepFunctions();

    const params = {
      stateMachineArn: stateMachineArn,
      input: "messagemessage",
    };

    stepFunction.startExecution(params, (error, data, callback) => {
      if (error) {
        console.log(error);
        const response = {
          statusCode: 500,
          body: JSON.stringify({
            message: "There was an error",
          }),
        };
        reject(error);
      } else {
        console.log(data);
        const response = {
          statusCode: 200,
          body: JSON.stringify({
            message: "Step function worked",
          }),
        };
        // callback(null, response);
        resolve(response);
        console.log(response);
      }
    });
  });

module.exports = { AuthService, setStepFunService };
