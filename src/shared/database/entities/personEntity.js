/*
 * Author: Hashika
 * Date: 29/01/2021
 * Copyright © 2021 CellcardPlay. All rights reserved.
 *
 * Auth Entity
 */

const { TABLES } = require("../../constants");

const personEntity = (sequelize, DataTypes) => {
  return sequelize.define(
    TABLES.PERSON,
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      firstName: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      age: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
      defaultScope: {
        attributes: { exclude: ['createdAt', 'updatedAt'] }
      }
    }
  );
};

module.exports = personEntity;
