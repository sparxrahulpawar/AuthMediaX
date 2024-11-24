"use strict";
const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const oauth_accounts = sequelize.define(
    "oauth_accounts",
    {
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "users",
          key: "id",
        },
        onDelete: "CASCADE",
      },
      provider: {
        type: DataTypes.ENUM("google", "facebook", "instagram", "whatsapp"),
        allowNull: false, // Ensure it's required
      },
      provider_id: {
        type: DataTypes.STRING(255), // Limit string length if needed
        allowNull: false, // Ensure it's required
      },
    },
    {
      tableName: "oauth_accounts", // Optional: Specify the table name explicitly
      timestamps: true, // Automatically adds createdAt and updatedAt
    }
  );

  // Define associations using the `associate` method
  oauth_accounts.associate = (models) => {
    oauth_accounts.belongsTo(models.users, {
      foreignKey: "user_id",
      as: "user",
    });
  };

  return oauth_accounts;
};
