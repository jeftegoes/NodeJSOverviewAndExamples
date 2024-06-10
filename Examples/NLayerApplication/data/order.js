module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define(
    "order",
    {
      orderId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        unique: true,
      },
      total: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
    },
    { freezeTableName: true, timestamps: false }
  );

  return Order;
};
