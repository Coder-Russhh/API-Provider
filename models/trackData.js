const mongoose = require("mongoose");

const trackDataSchema = new mongoose.Schema({
    ip: String,
    endpoint: String,
    timestamp: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("TrackData", trackDataSchema)