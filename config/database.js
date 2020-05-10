const Seq = require('sequelize')

const db = new Seq('postgres://angttfpz:WEKnSayQbxet0andZx0zNb_FzyY-vrBQ@isilo.db.elephantsql.com:5432/angttfpz', {
    dialect: "postgres",
    logging: false

})
try {
    db.authenticate();
    console.log('Connection has been established successfully.');
}
catch (error) {
    console.error('Unable to connect to the database:', error);
}

module.exports = db

