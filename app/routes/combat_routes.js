const express = require('express')
const passport = require('passport')

const Combat = require('../models/combat')

const customErrors = require('../../lib/custom_errors')

const handle404 = customErrors.handle404
const requireOwnership = customErrors.requireOwnership

const removeBlanks = require('../../lib/remove_blank_fields')
const requireToken = passport.authenticate('bearer', { session: false })

const router = express.Router()

// INDEX
router.get('/combats', requireToken, (req, res, next) => {
  Combat.find()
    .then(combats => {
      return combats.map(combat => combat.toObject())
    })
    .then(combats => res.status(200).json({ combats: combats }))
    .catch(next)
})

// SHOW
router.get('/combats/:id', requireToken, (req, res, next) => {
  Combat.findById(req.params.id)
    .then(handle404)
    .then(combat => res.status(200).json({ combat: combat.toObject() }))
    .catch(next)
})

// CREATE
router.post('/combats', requireToken, (req, res, next) => {
  req.body.combat.owner = req.user.id

  Combat.create(req.body.combat)
    .then(combat => {
      res.status(201).json({ combat: combat.toObject() })
    })
    .catch(next)
})

// UPDATE
router.patch('/combats/:id', requireToken, removeBlanks, (req, res, next) => {
  delete req.body.combat.owner

  Combat.findById(req.params.id)
    .then(handle404)
    .then(combat => {
      requireOwnership(req, combat)

      return combat.updateOne(req.body.combat)
    })
    .then(() => res.sendStatus(204))
    .catch(next)
})

// DESTROY
router.delete('/combats/:id', requireToken, (req, res, next) => {
  Combat.findById(req.params.id)
    .then(handle404)
    .then(combat => {
      requireOwnership(req, combat)
      combat.deleteOne()
    })
    .then(() => res.sendStatus(204))
    .catch(next)
})

module.exports = router
