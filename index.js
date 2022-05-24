require("dotenv").config();

const produce = require("./kafka/producer");

exports.insertRecommendations = async (req, res) => {
  try {

    var bookIds = [1,2,3,4,5,6,7,8,9,10,11,12];
    
    bookIds.forEach(bookId => produce(JSON.stringify(bookId, null, 2)));

    res.status(200);
    res.send("Data published successfully");
  } catch (error) {
    res.status(500);
    res.send(error);
  }
};
