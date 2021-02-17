const mongoose = require('mongoose')

//connect
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/hunters', {
    //overriding default behavior
    useCreateIndex: true,
    useFindAndModify: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})

//export

module.exports.Bounty = require('./bounty')