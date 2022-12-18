'use strict';

const jwt = require('jsonwebtoken');
const jwtSecret = 'maxouBebouLePlusBo'; // secret used for the signature of the token
const LIFETIME_JWT = 24 * 60 * 60 * 1000; // in ms : 24 * 60 * 60 * 1000 = 24h (lifetime of a token)

const bcrypt = require('bcrypt');
const saltRounds = 10;

const { parse, serialize } = require('../utils/json');
const jsonDbPath = __dirname + '/../data/users.json';

// Default data
const defaultItems = [
  {
    id: 1,
    username: 'admin',
    password: '$2b$10$RqcgWQT/Irt9MQC8UfHmjuGCrQkQNeNcU6UtZURdSB/fyt6bMWARa',
    scoreReflexe: 9999,
    scoreFastClick: 0,
    scoreTracking: -9999,
    scoreMemory: 9999,
  },
];

class Users {

  constructor(dbPath = jsonDbPath, items = defaultItems) {
    this.jsonDbPath = dbPath;
    this.defaultItems = items;
    serialize(this.jsonDbPath, this.defaultItems);
  }

  /**
   * Increments the id for the next user
   * @returns the next id
   */
  getNextId() {
    const users = parse(this.jsonDbPath);
    const lastItemIndex = users?.length !== 0 ? users.length - 1 : undefined;
    if (lastItemIndex === undefined) return 1;
    const lastId = users[lastItemIndex]?.id;
    const nextId = lastId + 1;
    return nextId;
  }

  /**
   * Returns the item identified by id
   * @param {number} id - id of the item to find
   * @returns {object} the item found or undefined if the ids does not lead to an item
   */
  getOneById(id) {
    const items = parse(this.jsonDbPath);
    const foundIndex = items.findIndex((item) => item.id == id);
    if (foundIndex < 0) return;

    return items[foundIndex];
  }

  /**
   * Returns the item identified by username
   * @param {string} username - username of the item to find
   * @returns {object} the item found or undefined if the username does not lead to a item
   */

  getOneByUsername(username) {
    const items = parse(this.jsonDbPath);
    const foundIndex = items.findIndex((item) => item.username == username);
    if (foundIndex < 0) return;

    return items[foundIndex];
  }

  getSpecificScore(username, scoreName){
    const items = parse(this.jsonDbPath);
    const foundIndex = items.findIndex((item) => item.username == username);
    if (foundIndex < 0) return;
    if(scoreName == "scoreReflexe")return items[foundIndex].scoreReflexe;
    else if(scoreName == "scoreFastClick")return items[foundIndex].scoreFastClick;
    else if(scoreName == "scoreTracking")return items[foundIndex].scoreTracking;
    else return items.foundIndex[foundIndex].scoreMemory;
  }

  /**
   * Updates an item in the json file and returns the updated item
   * @param {number} id - id of the item to be updated
   * @param {object} body - it contains all the data to be updated
   * @returns {object} the updated item or undefined if the update operation failed
   */

  updateOne(username, body) {
    const items = parse(this.jsonDbPath);
    const foundIndex = items.findIndex((item) => item.username == username);
    if (foundIndex < 0) return;

    const updateditem = { ...items[foundIndex], ...body };

    items[foundIndex] = updateditem;

    serialize(this.jsonDbPath, items);
    return updateditem;
  }

  /**
   * Adds an item in the json file and returns the added item (containing a new id)
   * @param {object} body - it contains all required data to create an item
   * @returns {object} the item that was created (with id)
   */

  async addOne(body) {
    const items = parse(jsonDbPath);

    const hashedPassword = await bcrypt.hash(body.password, saltRounds);

    const newItem = {
      id: this.getNextId(),
      username: body.username,
      password: hashedPassword,
      scoreReflexe: 9999,
      scoreFastClick: 0,
      scoreTracking: -9999,
      scoreMemory: 9999,
    };
    items.push(newItem);
    serialize(this.jsonDbPath, items);
    return newItem;
  }

  /**
   * Authenticates a user and generate a token if the user credentials are OK
   * @param {*} username - username of the future user
   * @param {*} password - password of the future user
   * @returns the authenticatedUser ({username:..., token:....}) or undefined if the user could not
   * be authenticated
   */

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

  /**
   * Creates a new user in the json file and generate a token
   * @param {*} username - username of the future user
   * @param {*} password - password of the future user
   * @returns the new authenticated user ({username:..., token:....}) or undefined if the user could not
   * be created (if username already in use)
   */

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
