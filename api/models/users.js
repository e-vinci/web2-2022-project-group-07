'use strict';

const jwt = require('jsonwebtoken');
const jwtSecret = 'maxouBebouLePlusBo';
const LIFETIME_JWT = 24 * 60 * 60 * 1000; // in ms : 24 * 60 * 60 * 1000 = 24h

const bcrypt = require('bcrypt');
const saltRounds = 10;

const { parse, serialize } = require('../utils/json');
const jsonDbPath = __dirname + '/../data/users.json';

const defaultItems = [
  {
    id: 1,
    username: 'admin',
    password: '$2b$10$RqcgWQT/Irt9MQC8UfHmjuGCrQkQNeNcU6UtZURdSB/fyt6bMWARa',
    scoreReflexe: 0,
    scoreFastClick: 0,
    scoreTracking: 0,
    scoreMemory: 0,
  },
];

class Users {
  constructor(dbPath = jsonDbPath, items = defaultItems) {
    this.jsonDbPath = dbPath;
    this.defaultItems = items;
    serialize(this.jsonDbPath, this.defaultItems);
  }

  getNextId() {
    const users = parse(this.jsonDbPath);
    const lastItemIndex = users?.length !== 0 ? users.length - 1 : undefined;
    if (lastItemIndex === undefined) return 1;
    const lastId = users[lastItemIndex]?.id;
    const nextId = lastId + 1;
    return nextId;
  }

  getOneById(id) {
    const items = parse(this.jsonDbPath);
    const foundIndex = items.findIndex((item) => item.id == id);
    if (foundIndex < 0) return;

    return items[foundIndex];
  }

  getOneByUsername(username) {
    const items = parse(this.jsonDbPath);
    const foundIndex = items.findIndex((item) => item.username == username);
    if (foundIndex < 0) return;

    return items[foundIndex];
  }

  updateOne(username, body) {
    const items = parse(this.jsonDbPath);
    const foundIndex = items.findIndex((item) => item.username == username);
    if (foundIndex < 0) return;

    const updateditem = { ...items[foundIndex], ...body };
    
    items[foundIndex] = updateditem;

    serialize(this.jsonDbPath, items);
    return updateditem;
  }

  async addOne(body) {
    const items = parse(jsonDbPath);

    const hashedPassword = await bcrypt.hash(body.password, saltRounds);

    const newItem = {
      id: this.getNextId(),
      username: body.username,
      password: hashedPassword,
      scoreReflexe: 0,
      scoreFastClick: 0,
      scoreTracking: 0,
      scoreMemory: 0,
    };
    items.push(newItem);
    serialize(this.jsonDbPath, items);
    return newItem;
  }

  async login(username, password) {
    const userFound = this.getOneByUsername(username);
    if (!userFound) return;

    const matchPW = await bcrypt.compare(password, userFound.password);
    if (!matchPW) return;

    const authenticatedUser = {
      username: username,
      token: 'Future signed token',
    };

    const token = jwt.sign({ username: authenticatedUser.username }, jwtSecret, {
      expiresIn: LIFETIME_JWT,
    });

    authenticatedUser.token = token;
    return authenticatedUser;
  }

  register(username, password) {
    const userFound = this.getOneByUsername(username);
    if (userFound) return;

    const newUser = this.addOne({ username: username, password: password });

    const authenticatedUser = {
      username: username,
      token: 'Future signed token',
    };

    const token = jwt.sign({ username: authenticatedUser.username }, jwtSecret, {
      expiresIn: LIFETIME_JWT,
    });

    authenticatedUser.token = token;
    return authenticatedUser;
  }
}

module.exports = { Users };
