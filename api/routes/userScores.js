const express = require('express');
const { Users } = require('../models/users');
const { authorize } = require('../utils/authorize');

const router = express.Router();
const userModel = new Users();

/*get a user by his username : GET /userScores/{username} */
router.get('/:username', authorize, async function(req, res, next) {
  if (!req.params || req.params.username === '') return res.status(400).end();
  const user = await userModel.getOneByUsername(req.params.username);
  if (!user) return res.status(404).end();
  return res.json(user);
});

/*update the scoreReflexe for a user : PATCH /userScores/scoreReflexe */
router.patch('/scoreReflexe', authorize, async function(req, res, next) {
  if (!req.body || (req.body.hasOwnProperty('time-text') && req.body.scoreReflexe === ''))
    return res.status(400).end();
  /* continue change for reflexe game*/
  const user = await userModel.getOneByUsername(req.body.username);
  console.log(user.scoreReflexe);
  console.log(req.body.scoreReflexe);
  if (user.scoreReflexe <= req.body.scoreReflexe) {
    return res.json(user);
  } else {
    const updatedUser = await userModel.updateOne(req.body.username, req.body);

    if (!updatedUser) return res.status(409).end();

    return res.json(updatedUser);
  }
});

/*update the scoreReflexe for a user : PATCH /userScores/scoreFastClick */
router.patch('/scoreFastClick', authorize, async function(req, res, next) {
  if (!req.body || (req.body.hasOwnProperty('time-text') && req.body.scoreFastClick === ''))
    return res.status(400).end();
  /* continue change for reflexe game*/
  const user = await userModel.getOneByUsername(req.body.username);
  console.log(user.scoreFastClick);
  console.log(req.body.scoreFastClick);
  if (user.scoreFastClick >= req.body.scoreFastClick) {
    return res.json(user);
  } else {
    const updatedUser = await userModel.updateOne(req.body.username, req.body);

    if (!updatedUser) return res.status(409).end();

    return res.json(updatedUser);
  }
});

/*update the scoreTracking for a user : PATCH /userScores/scoreTracking */
router.patch('/scoreTracking', authorize, async function(req, res, next) {
  if (!req.body || req.body.scoreTracking === '') return res.status(400).end();
  /* continue change for reflexe game*/
  const user = await userModel.getOneByUsername(req.body.username);
  console.log(user.scoreTracking);
  console.log(req.body.scoreTracking);
  if (user.scoreTracking >= req.body.scoreTracking) {
    return res.json(user);
  } else {
    const updatedUser = await userModel.updateOne(req.body.username, req.body);

    if (!updatedUser) return res.status(409).end();

    return res.json(updatedUser);
  }
});

/*update the scoreMemory for a user : PATCH /userScores/scoreMemory */
router.patch('/scoreMemory', authorize, async function(req, res, next) {
  if (!req.body || req.body.scoreMemory === '') return res.status(400).end();
  /* continue change for reflexe game*/
  const user = await userModel.getOneByUsername(req.body.username);
  console.log(user.scoreMemory);
  console.log(req.body.scoreMemory);
  if (user.scoreMemory <= req.body.scoreMemory) {
    return res.json(user);
  } else {
    const updatedUser = await userModel.updateOne(req.body.username, req.body);

    if (!updatedUser) return res.status(409).end();

    return res.json(updatedUser);
  }
});

module.exports = router;
