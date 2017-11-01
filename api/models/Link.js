/**
 * Link.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

const uuid = require('uuid');

module.exports = {

  attributes: {
    uuid: {
      type: 'string',
      primaryKey: true,
      defaultsTo: function() {
        return uuid.v4();
      },
      unique: true,
      index: true,
      uuidv4: true
    },
    target: {
      type: 'string',
      required: true
    }
  }
};
