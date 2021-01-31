const { User } = require("../shared/database/entities");

const AuthService = async (event) => {
  try {
    const user = await User.findAll({
      where:{
        firstName:'hashika'
      },
      attributes:['firstName','lastName']
    });
    return {
      body: JSON.stringify(
        {
          message: "Go Serverless v1.0! Your function executed successfully!",
          name: user
        },
        null,
        2,
      ),
    };
  } catch (error) {
    return error;
  }
};

module.exports = AuthService;
