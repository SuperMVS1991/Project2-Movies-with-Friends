const Router = require('express').Router();
const { where } = require('sequelize');
const { Ratings } = require('../../models');
const withAuth = require('../../utilities/auth');

Router.get('/', async (req, res) => {
    try {
        const ratingData = await Ratings.findAll();
        where: {
            user_id: req.session.user_id
        }
        where: {
            movie_id: req.session.movie_id
        }
        res.status(200).json(ratingData);
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
    }
);


Router.get('/:id', async (req, res) => {
    try {
        const ratingData = await Ratings.findByPk(req.params.id);
        if (!ratingData) {
            res.status(404).json({ message: 'No rating found with this id!' });
            return;
        }
        res.status(200).json(ratingData);
    } catch (err) {
        res.status(500).json(err);
    }
});

Router.post('/', async (req, res) => {
    try {
        const newRating = await Ratings.create({
            ...req.body,
            // user_id: req.session.user_id,
        });
        res.status(200).json(newRating);
    } catch (err) {
        res.status(400).json(err);
    }
});

Router.delete('/:id', async (req, res) => {
    try {
        const ratingData = await Ratings.destroy({
            where: {
                id: req.params.id,
                // user_id: req.session.user_id,
            },
        });
        if (!ratingData) {
            res.status(404).json({ message: 'No rating found with this id!' });
            return;
        }
        res.status(200).json(ratingData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = Router;