const items = require("../data/items");
const instaUser = require("../data/instaUser");
const casualChatbotData = require("../data/casualChatbotData");
const products = require("../data/products");

const getItems = (req, res) => {
  res.status(200).json(items);
};

const getInstaUsers = (req, res) => {
  res.status(200).json(instaUser);
};

const getChatbotData = (req,res)=>{
    res.status(200).json(casualChatbotData)
}

const getProductsData = (req,res)=>{
    res.status(200).json(products)
} 

module.exports = { getItems, getInstaUsers, getChatbotData, getProductsData };
