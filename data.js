const Sequelize = require('sequelize');

const sequelize = new Sequelize('DB_4170_ncma', 'DB_4170_ncma_user', 't3l1k0', {
    host: 's05.winhost.com',
    dialect: 'mssql',
    operatorsAliases: false,

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
});

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

module.exports = {
    sequelize: sequelize
};
// sequelize.query("SELECT * FROM memberCerts", { model: MemberCerts })
//     .then(memberCerts => {
//         console.log(memberCerts[0])
//     })

