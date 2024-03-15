const Router = require('express').Router();
const { movieNominate } = require('../../models');
const withAuth = require('../../utilities/auth');

Router.get('/', async (req, res) => {
    try {
        const nominationData = await movieNominate.findAll();
        res.status(200).json(nominationData);
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
    }
);

Router.get('/:id', async (req, res) => {
    try {
        const nominationData = await movieNominate.findByPk(req.params.id);
        if (!nominationData) {
            res.status(404).json({ message: 'No nomination found with this id!' });
            return;
        }
        res.status(200).json(nominationData);
    } catch (err) {
        res.status(500).json(err);
    }
});

Router.post('/', async (req, res) => {
    try {
        const newNomination = await movieNominate.create({
            ...req.body,
            // user_id: req.session.user_id,
        });
        res.status(200).json(newNomination);
    } catch (err) {
        res.status(400).json(err);
    }
});

Router.delete('/:id', async (req, res) => {
    try {
        const nominationData = await movieNominate.destroy({
            where: {
                id: req.params.id,
                // user_id: req.session.user_id,
            },
        });
        if (!nominationData) {
            res.status(404).json({ message: 'No nomination found with this id!' });
            return;
        }
        res.status(200).json(nominationData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = Router;