const database = require('../config/database')
const Seq = require('sequelize')

let taskTable = database.define('task', {
    info: {
        type: Seq.STRING
    },
    title: {
        type: Seq.STRING
    },
    link: {
        type: Seq.STRING
    },
    people: {
        type: Seq.ARRAY(Seq.STRING)
    },
    date: {
        type: Seq.STRING
    },
    time: {
        type: Seq.STRING
    }
})

module.exports = taskTable