require("dotenv").config();

const produce = require("./kafka/producer");

exports.insertRecommendations = async (req, res) => {
  try {
    var bookIds = [68, 16, 14, 69, 46, 57, 59, 54, 4, 13, 38, 52];

    bookIds.forEach((bookId) => {
      const message = {
        bookId: bookId,
        recommended: true,
      };
      produce(JSON.stringify(message, null, 2));
    });

    res.status(200);
    res.send("Data published successfully");
  } catch (error) {
    res.status(500);
    res.send(error);
  }
};
