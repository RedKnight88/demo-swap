const router = require('express').Router();
const { Item } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const allItem = await Item.findAll();
        res.status(200).json(allItem);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const newItem = await Item.findByPk(req.params.id);
        res.status(200).json(newItem);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;