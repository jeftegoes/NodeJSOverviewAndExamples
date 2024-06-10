module.exports = (sequelize, DataTypes) => {
  const OrderItem = sequelize.define(
    "orderItem",
    {
      orderItemId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        unique: true,
      },
      quantity: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
      price: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
      total: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
    },
    { freezeTableName: true, timestamps: false }
  );

  return OrderItem;
};
