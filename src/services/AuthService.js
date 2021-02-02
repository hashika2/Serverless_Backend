const getAllData = require("../shared/database/repositories/PersonsRepo");

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

module.exports = AuthService;
