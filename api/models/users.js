"use strict"

const jwt = require("jsonwebtoken");
const jwtSecret = "maxouBebouLePlusBo";
const LIFETIME_JWT = 24 * 60 * 60 * 1000; // in ms : 24 * 60 * 60 * 1000 = 24h

const bcrypt = require('bcrypt');
const saltRounds = 10;

const { parse, serialize} = require("../utils/json");
const jsonDbPath = __dirname + "/../data/users.json";

const defaultItems = [
    {
        role: "admin",
        username: "admin",
        password: "$2b$10$RqcgWQT/Irt9MQC8UfHmjuGCrQkQNeNcU6UtZURdSB/fyt6bMWARa",
    },
];

class Users {
    
    constructor(dbPath = jsonDbPath, items = defaultItems){
        this.jsonDbPath = dbPath;
        this.defaultItems = items;
        serialize(this.jsonDbPath, this.defaultItems);
    }

    getOneByUsername(username){
        const items = parse(this.jsonDbPath);
        const foundIndex = items.findIndex((item) => item.username == username);
        if(foundIndex < 0)return;

        return items[foundIndex];
    }

    async addOne(body){
        const items = json.parse(jsonDbPath);

        const hashedPassword = await bcrypt.hash(body.password, saltRounds);

        const newItem = {
            role: user,
            username: username,
            password: hashedPassword,
        };
        items.push(newItem);
        serialize(this.jsonDbPath, items);
        return newItem;
    }

    async login(username, password){
        const userFound = this.getOneByUsername(username);
        if(!userFound)return;

        const matchPW = await bcrypt.compare(password, userFound.password);
        if(!matchPW)return;

        const authenticatedUser = {
            username: username,
            token: "Future signed token",
        };

        const token = jwt.sign(
            { username: authenticatedUser.username },
            jwtSecret,
            { expiresIn: LIFETIME_JWT },
        );

        authenticatedUser.token = token;
        return authenticatedUser;
    }

    register(username, password){
        const userFound = this.getOneByUsername(username);
        if(userFound)return;

        const newUser = this.addOne({username: username, password: password});

        const authenticatedUser = {
            username: username,
            token: "Future signed token",
        };

        const token = jwt.sign(
            { username: authenticatedUser.username },
            jwtSecret,
            { expiresIn: LIFETIME_JWT },
        );

        authenticatedUser.token = token;
        return authenticatedUser; 
    }
}

module.exports = { Users };