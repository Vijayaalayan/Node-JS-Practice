const Sequelize = require('sequelize');

const sequelize = new Sequelize('node_sql','root','toor',{
    dialect:'mysql',
    host:'localhost'
});

module.exports = sequelize;