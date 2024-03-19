module.exports = (sequelize, DataTypes) => {
  const Loan = sequelize.define(
    "loan",
    {
      loanId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
      },
      dateDue: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      dateReturned: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    { freezeTableName: true, timestamps: false }
  );

  return Loan;
};
