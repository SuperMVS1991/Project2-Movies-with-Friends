const express = require('express');
const router = express.Router();

// Sample events data (replace with database interaction)
let events = [
    { id: 1, title: 'Event 1', date: '2024-03-08' },
    { id: 2, title: 'Event 2', date: '2024-03-10' }
];

// GET /calendar
router.get('/', (req, res) => {
    res.json(events);
});

// POST /calendar
router.post('/', (req, res) => {
    const { title, date } = req.body;
    const newEvent = { id: events.length + 1, title, date };
    events.push(newEvent);
    res.status(201).json(newEvent);
});

// PUT /calendar/:id
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { title, date } = req.body;
    const index = events.findIndex(event => event.id === parseInt(id));
    if (index !== -1) {
        events[index] = { ...events[index], title, date };
        res.json(events[index]);
    } else {
        res.status(404).json({ message: 'Event not found' });
    }
});

// DELETE /calendar/:id
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const index = events.findIndex(event => event.id === parseInt(id));
    if (index !== -1) {
        events.splice(index, 1);
        res.json({ message: 'Event deleted successfully' });
    } else {
        res.status(404).json({ message: 'Event not found' });
    }
});

module.exports = router;