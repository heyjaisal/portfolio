const HomeCard = require("../models/HomeCard");

exports.getHomeCards = async (req, res) => {
  try {
    const cards = await HomeCard.find();
    res.json(cards);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createHomeCard = async (req, res) => {
  try {
    const card = new HomeCard(req.body);
    await card.save();
    res.status(201).json({ success: true, data: card });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};

exports.updateHomeCard = async (req, res) => {
  try {
    const card = await HomeCard.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(card);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteHomeCard = async (req, res) => {
  try {
    await HomeCard.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
