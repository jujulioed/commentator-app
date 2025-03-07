import { getAllUsers, getUserById, createNewUser, diactivateUser, updateUser} from '../services/users'

function getUsers(req, res) {
    try {
        const users = getAllUsers();
        res.send(users);
    } catch (error) {
        res.status(500);
        res.send(error.message)
    }
}

function getUser(req, res) {
    try {
        const id = req.params.id;

        if(id && Number(id)) {
            const user = getUserById(id);
            res.send(user);
        } else {
            res.status(422);
            res.send('Invalid Id');
        }
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

/*
User forms:
name
nickname
birthday
email
password
gender

*/
function postUser(res, res) {
    try{
        const newUser = req.body;
        const name = req.body.name;
        const nickname = req.body.nickname;
        const birthday = req.body.birthday;
        const email = req.body.email;
        const password = req.body.password;
        const gender = req.body.gender;
        
        if(name && nickname && birthday && email && password && gender) {
            createNewUser(newUser);
            res.status(201);
            res.send("User successfully created!")
        } else {
            res.status(422);
            res.send("Missing fields.");
        }
    } catch(error) {
        res.status(422);
        res.send(error.message);
    }
}

function patchUser(res, res) {
    try {
        const id = req.params.id;

        // TODO: create a function in Utils to verify input data (for example: verify if the received id is a number)
        if(id && Number(id)) {
            const body = req.body;
            updateUser(body, id);
            res.send("User sucessfully updated");
        } else {
            res.status(422);
            res.send("Invalid id");
        }
    } catch(error) {
        res.status(500);
        res.send(error.message);
    }
}

function deleteUserById(req, res) {
    // this function will actually only diactivate the user, but will keep his posts in internal DB;
    try {
        const id = req.params.id;

        if(id && Number(id)) {
            diactivateUser(id);
            res.send("User sucessfully diactivated")
        } else {
            res.status(422);
            res.send("Invalid Id");
        }
    } catch(error) {
        res.status(500);
        res.send(error.message);
    }
}

module.exports = {
    getUsers,
    getUser,
    postUser,
    patchUser,
    deleteUserById
}