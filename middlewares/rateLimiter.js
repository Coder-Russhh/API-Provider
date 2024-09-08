const rateLimit = require("express-rate-limit");

// limit each IP address (internet protocol) unique address

const limiter = rateLimit({
    windowMs: 30 * 60 * 1000, // 30 minutes
    max: 100, // Limit each IP to 100 requests per window
    message: "Too many requests from this IP, please try again after 30min."
})

module.exports = limiter