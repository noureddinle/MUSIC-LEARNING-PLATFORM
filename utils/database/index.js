const { connectDB, closeDB } = require('./connection');
const { getCollections } = require('./collections');
const { SCHEMAS } = require('./schemas');
const { ObjectId } = require('mongodb');

module.exports = {
  connectDB,
  closeDB,
  getCollections,
  SCHEMAS,
  ObjectId
};