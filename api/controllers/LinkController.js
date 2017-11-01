/**
 * LinkController
 *
 * @description :: Server-side logic for managing Links
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  redirect: function(req, res) {
    var key = req.param('key');
    Link.findOne({
      uuid: key
    }).exec(function(err, link) {
      if (err && !link) {
        return res.status(500).send(err);
      }
      res.redirect(link.target);
    });
  }
};
