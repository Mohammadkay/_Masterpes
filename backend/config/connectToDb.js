const mongoose = require('mongoose');

module.exports = async () => {
    try {
        mongoose.connect(process.env.CONNECTION_STRING)
    } catch (error) {
        console.log('Connection Failed To MongoDB!', error)
    }
}