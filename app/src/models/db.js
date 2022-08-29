const { Sequelize } = require('sequelize');
const fs = require("fs");
const path = require("path");

let sequelize;
if (process.env.NODE_ENV === 'test') {
    sequelize = new Sequelize('sqlite::memory:', {
        logging: false,
    });
} else {
    sequelize = new Sequelize(process.env.MYSQL_DATABASE, process.env.MYSQL_USER, process.env.MYSQL_PASSWORD, {
        host: process.env.MYSQL_HOST,
        dialect: 'mysql'
    });
}

var db = {
    models: {}
};

fs.readdirSync(__dirname)
    .filter(file => {
        return (file.indexOf(".") !== 0) && (file !== "db.js");
    })
    .forEach(file => {
        var model = require(path.join(__dirname, file))(sequelize);
        db.models[model.name] = model;
    });

// Process all model associations.
Object.keys(db.models).forEach(function (modelName) {
    if ("associate" in db.models[modelName]) {
        db.models[modelName].associate(db.models);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

const connect = async () => {
    try {

        await db.sequelize.authenticate();
        if (process.env.NODE_ENV === 'test') {
            await db.sequelize.sync({ force: true })
        } else {
            await db.sequelize.sync({ force: false })
        }
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

module.exports = {
    db,
    connect
};
