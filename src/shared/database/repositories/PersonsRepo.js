const { User, Person } = require("../../database/entities");

User.belongsTo(Person, {
  foreignKey: "personId",
});
Person.hasMany(User, {
  foreignKey: "personId",
});

const getAllData = async () => {
  return await Person.findAll({
    where: {
      firstName: "hashika",
    },
    attributes: ["firstName", "lastName"],
    include: [User],
  });
};

module.exports = getAllData;
