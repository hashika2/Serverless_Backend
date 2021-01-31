const AuthService = require("../../services/AuthService");

const Auth = async (event) => {
  return await AuthService(event);
};

module.exports = Auth;
