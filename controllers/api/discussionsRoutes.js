const express = require('express');
const router = express.Router();
const { Discussion } = require('../../models');

router.post('/discussion', async (req, res) => {
  const { discussionName, userName, userPicture, userComment } = req.body;

  try {
    const newDiscussion = await Discussion.create({
      discussionName,
      userName,
      userPicture,
      userComment,
    });

    res.status(201).json(newDiscussion);
  } catch (error) {
    console.error('Error creating discussion:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/discussion/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const discussion = await Discussion.findByPk(id);
    if (!discussion) {
      return res.status(404).json({ error: 'Discussion not found' });
    }
    res.json(discussion);
  } catch (error) {
    console.error('Error fetching discussion:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


module.exports = router;