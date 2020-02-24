const db = require("../data/dbConfig.js");

module.exports = {
  getResources,
  getResourceById,
  add,
  remove
};

function getResources() {
  return db("resources");
}

function getResourceById(id) {
  return db("resources")
    .where({ id })
    .first();
}

function add(post) {
  return db("resources")
    .insert(post)
    .then(ids => {
      return getResourceById(ids[0]);
    });
}

function remove(id) {
  return db("resources")
    .where("id", id)
    .del();
}