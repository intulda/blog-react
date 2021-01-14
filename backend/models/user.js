module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    account: {
        type: DataTypes.STRING(30),
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING(30),
        allowNull: false,
    },
    nickname: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    authentication: {
        type: DataTypes.STRING(20),
        allowNull: false,
    }
  }, {
    charset: 'utf8',
    collate: 'utf8_general_ci',
  });
  User.associate = (db) => {
      db.User.hasMany(db.Post);
      db.User.hasMany(db.Comment);
  }
  return User;
}