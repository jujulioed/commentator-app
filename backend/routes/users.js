import { Router } from 'express';
import User from '../controllers/users'

const router = Router();

// Return all registered users
router.get('/', User.getUsers);

// Return the info from a user from an id
router.get('/:id', User.getUser);

// Create a new User
router.post('/', User.postUser);

// Update a user thoughout the id
router.patch('/:id', User.patchUser);

// Delete an user (disactivate the user and changes its name for 'undefinedUserUUID')
router.delete('/:id', User.deleteUserById);

module.exports = router;