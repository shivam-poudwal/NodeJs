const express = require("express");
const router = express.Router();

// Import controller functions
const { 
    handleGetAllUsers, 
    handleGetAllUsersgetUserById, // Fixed typo in function name
    handleUpdateById, 
    deleteUserById, 
    handleCreateUser 
} = require("../controllers/user"); // Ensure this path is correct

// Define routes
router.route('/')
    .get(handleGetAllUsers) // Route for getting all users
    .post(handleCreateUser); // Route for creating a user

router.route('/:id')
    .get(handleGetAllUsersgetUserById) // Route for getting a user by ID
    .patch(handleUpdateById) // Route for updating a user by ID
    .delete(deleteUserById); // Route for deleting a user by ID

module.exports = router;
