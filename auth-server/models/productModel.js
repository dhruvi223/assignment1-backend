const { DataTypes } = require("sequelize");

// defined a model for product table
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define("product", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imageUrl: { type: DataTypes.STRING },
    price: { type: DataTypes.INTEGER },
    description: { type: DataTypes.STRING },
    category: { type: DataTypes.STRING },
  });
  return Product;
};
