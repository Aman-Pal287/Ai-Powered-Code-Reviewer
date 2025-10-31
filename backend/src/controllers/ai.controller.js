const aiService = require("../services/ai.service");

async function getReview(req, res) {
  const { code } = req.body;

  if (!code) {
    return res.status(400).send("Prompt is required");
  }

  const response = await aiService(code);

  res.status(200).json({ message: "Code is reviewed", response: response });
}

module.exports = { getReview };
