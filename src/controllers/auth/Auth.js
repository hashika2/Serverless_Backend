const {
  AuthService,
  setStepFunService,
} = require("../../services/AuthService");

const Auth = async (event) => {
  return await AuthService(event);
};

const Step = async (event) => {
  return await setStepFunService(event);
};
module.exports = { Auth, Step };
