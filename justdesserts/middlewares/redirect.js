const redirect = {};

redirect.ifLoggeIn = (route) => 
(req, res, next) => (req.user ? res.redirect(route) : next());

redirect.ifNotLoggeIn = (route = '/login') => 
(req, res, next) => (req.user ? next() : res.redirect(route));

redirect.ifNotAuthorized = (route) => 
(req, res, next) => (req.user.email != res.params.email ? res.redirect(route) : next());

module.exports = redirect; 