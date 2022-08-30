const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Users = sequelize.define('Users', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },


    }, {
        tableName: 'Users'
    });
    // User.associate = (models) => {
    //     models.User.belongsTo(models.Region);
    //     models.User.hasMany(models.Accommodation);
    // }
    return Users;
};
