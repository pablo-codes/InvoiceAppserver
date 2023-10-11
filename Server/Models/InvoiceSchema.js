const mongoose = require('mongoose');
const details = {
    key: Number,
    description: String,
    qty: Number,
    rate: Number,
    amount: Number
}
const invoice = new mongoose.Schema({
    userid: String,
    Details: details,
    To: Object,
    Note: String
});
module.exports = new mongoose.model('invoices', invoice)
