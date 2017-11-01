/**
 * LinkController
 *
 * @description :: Server-side logic for managing Links
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  create: function(req, res) {
    var target = req.param('target'),
      regexp = /^(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;

    if (regexp.test(target) !== true) {
      return res.badRequest("The provided url is not valid.");
    }

    Link.create({
      target: target
    }).exec(function(err, link) {
      if (err) {
        return res.status(500).send(err);
      }
      return res.send(link);
    });
  },

  redirect: function(req, res) {
    var key = req.param('key');
    Link.findOne({
      uuid: key
    }).exec(function(err, link) {
      if (err || !link) {
        return res.status(500).send(err);
      }
      res.redirect(link.target);
    });
  }
};
