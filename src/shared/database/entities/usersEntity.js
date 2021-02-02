/*
 * Author: Hashika
 * Date: 02/02/2021
 * Copyright © 2021 CellcardPlay. All rights reserved.
 *
 * Auth Entity
 */

const { TABLES } = require("../../constants");

const userEntity = (sequelize, DataTypes) => {
  return sequelize.define(
    TABLES.USER,
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      personId: {
        type: DataTypes.INTEGER,
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
        attributes: { exclude: ["createdAt", "updatedAt"] },
      },
    }
  );
};

module.exports = userEntity;
