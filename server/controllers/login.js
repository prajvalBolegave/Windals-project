import { CreateUser } from '../models/user.js'

export const renderLogin = (req, res) => {
    res.json("This also Works and this route will render the login form nothing more");
}


export const validateUser = (req, res) => {
    const { username, password } = req.body;
    CreateUser.findOne({username: username}, (err, user) => {
        if(user) {
            if(password == user.password) {
                res.send({message: "Login Successfull", user: user});
            } else {
                res.send({ message: "Invalid Credentials"});
            }
        } else {
            res.send("User not Registered");
        }
    })
}


/*--------------------------Don't uncomment this---------------------------*/
export const createUser = (req, res) => {
    const { username, email, password } = req.body;
    const newUser = new CreateUser({ username, email, password });

    try {
        newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}
/*--------------------------Don't uncomment this---------------------------*/