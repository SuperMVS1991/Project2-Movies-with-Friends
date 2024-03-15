const express = require('express');
const router = express.Router();
const { Genres } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const genreData = await Genres.findAll();
    res.status(200).json(genreData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const genreData = await Genres.findByPk(req.params.id);
    if (!genreData) {
      res.status(404).json({ message: 'No genre found with this id!' });
      return;
    }
    res.status(200).json(genreData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
