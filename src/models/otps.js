"use strict";
const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const OTPs = sequelize.define(
    "OTPs",
    {
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "users",
          key: "id",
        },
      },
      otp: {
        type: DataTypes.STRING(6),
        allowNull: false, // Ensure OTP is required
      },
      type: {
        type: DataTypes.ENUM("phone", "email"),
        allowNull: false, // Ensure type is required
      },
      expires_at: {
        type: DataTypes.TIME,
        allowNull: false, // Ensure expiration time is required
      },
      is_verified: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false, // Default value for is_verified
      },
    },
    {
      tableName: "OTPs", // Optional: Explicitly define the table name
      timestamps: true, // Automatically handles createdAt and updatedAt
    }
  );

  // Define associations (if any) in the associate method
  OTPs.associate = (models) => {
    OTPs.belongsTo(models.users, {
      foreignKey: "user_id",
      as: "user",
    });
  };

  return OTPs;
};
