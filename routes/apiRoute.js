const express = require("express");
const { getItems, getInstaUsers, getChatbotData, getProductsData } = require("../controller/apiController");

const router = express.Router();

// const corsOption = {
//     origin: "http://localhost:5173",
//     methods: ["GET"]
// }

// routes establishment ----
router.get("/items", getItems);

router.get("/instagramUsers", getInstaUsers)

router.get("/chatbotData", getChatbotData)

router.get("/products", getProductsData)

module.exports = router