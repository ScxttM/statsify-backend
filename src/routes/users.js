const { Router } = require('express');
const { getUser, createUser, deleteUser } = require('../controllers/users.controller');

const router = Router();

router.route('/')
    .put(createUser)
router.route('/:id')
    .get(getUser)
    .delete(deleteUser);
module.exports = router;