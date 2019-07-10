const router = require('express').Router();
const Player = require('../models/Player');
const TeamPlayer = require('../models/TeamPlayer');
const url = require('url');

router.get('/', async (req, res) => {

    try {
        const players = await Player.find().sort({
            date: 1
        });
        res.json(players);
    } catch (error) {
        res.status(400).send(error);
    }
});

router.post('/', async (req, res) => {

    const player = new Player({
        name: req.body.name,
        photo: req.body.photo,
        short_name: req.body.short_name,
        nationality: req.body.nationality,
        position: req.body.position,
        dob: req.body.dob,
        shirt_number: req.body.shirt_number,
        active: req.body.active,
    });


    try {
        const savedPlayer = await player.save();
        if (req.body.team && savedPlayer) {
            const teamplayer = new TeamPlayer({
                team: req.body.team,
                player: player._id,
                shirt_number: req.body.shirt_number,
                position: req.body.position,
                transfer_date: Date.now()
            });
            await teamplayer.save();
        }
        // res.send({player: player._id});
        // res.redirect('/admin')
        res.redirect(url.format({
            pathname: "/admin",
            query: {
                "msg":"aded successfully",
                "player": player._id
            }
        }));

    } catch (err) {
        res.status(400).send(err);
    }
});

module.exports = router;