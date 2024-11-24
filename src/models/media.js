'use strict';
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const media = sequelize.define('media', {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    media_type: {
      type: DataTypes.ENUM('image', 'video', 'audio'),
      allowNull: false,  // Set as false to ensure it's required
    },
    media_url: {
      type: DataTypes.STRING(255),  // Limit string length to 255 characters
      allowNull: true,
    },
    description: {
      type: DataTypes.STRING(255),  // Limit description length to 255 characters
      allowNull: true,
    }
  }, {
    timestamps: true,  // Automatically adds createdAt and updatedAt fields
  });

  // Associations
  media.associate = function(models) {
    // Define associations here
    media.belongsTo(models.users, {
      foreignKey: 'user_id',
      as: 'user',  // Alias for the user association
    });
  };

  return media;
};
