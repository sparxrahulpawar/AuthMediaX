module.exports = (sequelize, DataTypes) => {
  const Media = sequelize.define(
    "media",
    {
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      media_type: {
        type: DataTypes.ENUM("image", "video", "audio"), // Add your valid enum values here
        allowNull: false,
      },
      media_url: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      tableName: "media", // Optional: explicitly specify the table name
      timestamps: true, // Enable timestamps
      underscored: true, // Use snake_case column names
      createdAt: "created_at", // Map Sequelize's createdAt to created_at
      updatedAt: "updated_at", // Map Sequelize's updatedAt to updated_at
    }
  );

  return Media;
};
