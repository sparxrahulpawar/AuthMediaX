"use strict";
const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const users = sequelize.define(
    "users",
    {
      name: {
        type: DataTypes.STRING(100), // Setting the length to 100 characters
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING(100), // Setting the length to 100 characters
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING(255), // Assuming password length up to 255 characters
        allowNull: false,
      },
      phone: {
        type: DataTypes.STRING(15), // Setting the length to 15 characters (for phone numbers)
        allowNull: false,
      },
      role: {
        type: DataTypes.ENUM("user", "admin"),
        allowNull: false,
        defaultValue: "user",
      },
      is_verified: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    },
    {
      timestamps: true, // Automatically adds createdAt and updatedAt fields
    }
  );

  // Associations (if any) can be defined here
  // For example:
  // users.associate = function(models) {
  //   users.hasMany(models.orders);
  // };

  return users;
};
