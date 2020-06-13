const express = require('express')

const router = express.Router()

const projects = require('./projectRoutes')
const actions = require('./actionRoutes.js')

router.use('/projects', projects)
router.use('/actions', actions)

module.exports = router
