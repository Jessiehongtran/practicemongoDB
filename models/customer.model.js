let mongoose = require('mongoose');


const username = 'htran'
const password = 'p%40ssw0rd%279%27%21'

mongoose.connect(`mongodb+srv://${username}:${password}@cluster0-jtlmu.mongodb.net/test?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    // user: username,
    // pass: password
    dbName: 'Customer'
  })
  .then(() => console.log('DB Connected!'))
  .catch(err => {
    console.log(Error, err.message);
    });

let CustomerSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        required: true,
        unique: true
    }
})

module.exports = mongoose.model('Customer', CustomerSchema)