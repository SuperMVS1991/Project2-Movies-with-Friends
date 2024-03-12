const express = require('express');
const router = express.Router();

// Sample comments data (replace with database interaction)
let comments = [
    { id: 1, text: 'Comment 1' },
    { id: 2, text: 'Comment 2' },
    { id: 3, text: 'Comment 3' }
];

// GET /api/comments
router.get('/', (req, res) => {
    res.json(comments);
});

// POST /api/comments
router.post('/', (req, res) => {
    const { text } = req.body;
    const newComment = { id: comments.length + 1, text };
    comments.push(newComment);
    res.status(201).json(newComment);
});

// PUT /api/comments/:id
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { text } = req.body;
    const index = comments.findIndex(comment => comment.id === parseInt(id));
    if (index !== -1) {
        comments[index].text = text;
        res.json(comments[index]);
    } else {
        res.status(404).json({ message: 'Comment not found' });
    }
});

// DELETE /api/comments/:id
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const index = comments.findIndex(comment => comment.id === parseInt(id));
    if (index !== -1) {
        comments.splice(index, 1);
        res.json({ message: 'Comment deleted successfully' });
    } else {
        res.status(404).json({ message: 'Comment not found' });
    }
});

module.exports = router;
